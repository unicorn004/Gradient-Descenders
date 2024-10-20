from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
import joblib
import pandas as pd
from datetime import datetime
import joblib
import tensorflow as tf
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM,Dense,Dropout
from tensorflow.keras.regularizers import l2
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt, csrf_protect
from django.utils.decorators import method_decorator
import os
import json



model_path = 'C:/Users/Harsh/OneDrive/Desktop/DataHack/Gradient-Descenders/server/ML_Models/lstm_model.h5'
if not os.path.exists(model_path):
    print(f"Model file not found at {model_path}")
else:
    model = tf.keras.models.load_model(model_path, custom_objects={'mse': tf.keras.losses.MeanSquaredError()})

scaler = joblib.load('C:/Users/Harsh/OneDrive/Desktop/DataHack/Gradient-Descenders/server/ML_Models/scaler.pkl')
raw_material_columns = joblib.load('C:/Users/Harsh/OneDrive/Desktop/DataHack/Gradient-Descenders/server/ML_Models/columns.pkl')
# unit_map=joblib.load('C:\Users\Harsh\OneDrive\Desktop\DataHack\Gradient-Descenders\server\ML_Models\unit_map.pkl')

df=pd.read_csv('ML_Models/Raw_material_consumption_per_day.csv')
df.rename(columns={'Unnamed: 0': 'Date'}, inplace=True)
df.set_index('Date',inplace=True)

scaled_df=scaler.transform(df)


@csrf_exempt
def predict(request):
    if request.method == 'POST':
        input_date = request.POST.get('date')
        
        # Preprocess and predict (as previously described)
        # Preprocess the input date
        date = pd.to_datetime(input_date)
        print(date)
        
        # Create a DataFrame for the model input
        input_data = pd.DataFrame({
            'year': [date.year],
            'month': [date.month],
            'day': [date.day],
        })
        print(input_data)
        
        # Make prediction
        prediction = model.predict(input_data)
        
        return JsonResponse({'prediction': prediction[0]})

def forecast_future(model, data, n_future, scaler, n_timesteps=20):
    scaled_data = scaler.transform(data[-n_timesteps:])
    predictions = []
    print(raw_material_columns)

    for _ in range(n_future):
        input_sequence = scaled_data.reshape((1, n_timesteps, len(raw_material_columns)))
        
        next_pred = model.predict(input_sequence)
        predictions.append(next_pred[0])
        scaled_data = np.vstack([scaled_data[1:], next_pred[0]])

    # Inverse transform predictions to original scale
    predictions = scaler.inverse_transform(predictions)
    prediction_df = pd.DataFrame(predictions, columns=raw_material_columns)
    prediction_df['Date'] = pd.date_range(start=pd.Timestamp.now(), periods=n_future, freq='D')
    prediction_df.set_index('Date', inplace=True)

    return prediction_df



@csrf_exempt
def forecast(request):
    # Ensure the request method is POST
    if request.method == 'POST':
        try:
            # Parse the JSON data from the request body
            body_unicode = request.body.decode('utf-8')
            body_data = json.loads(body_unicode)
            data = body_data.get('data')  # Get 'data' from the JSON

            if not data:
                return JsonResponse({'error': 'No data provided'}, status=400)

            # Convert the data parameter to a list of column names
            data_columns = data.split(',')

            # Ensure all requested columns are valid
            for column in data_columns:
                if column not in raw_material_columns:
                    return JsonResponse({'error': f'Invalid column name: {column}'}, status=400)

            # Generate future predictions
            n_future = 100
            future_predictions = forecast_future(model, scaled_df, n_future, scaler)

            # Filter the DataFrame to only include the requested columns
            future_df = pd.DataFrame(future_predictions, columns=raw_material_columns)
            filtered_future_df = future_df[data_columns]

            # Convert the DataFrame to a dictionary of records and return as JSON
            return JsonResponse(filtered_future_df.to_dict('records'), safe=False)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            return JsonResponse({'error': 'An error occurred', 'details': str(e)}, status=500)

    else:
        return JsonResponse({'error': 'Invalid request method'}, status=400)
