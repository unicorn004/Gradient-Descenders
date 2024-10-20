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
import pandas as pd
from prophet import Prophet
import matplotlib.pyplot as plt
from joblib import dump, load




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

online_model = joblib.load('C:/Users/Harsh/OneDrive/Desktop/DataHack/Gradient-Descenders/server/ML_Models/COMBINED_SALES_MODEL (2).joblib')



# @csrf_exempt
# def predict(request):
#     if request.method == 'POST':
#         input_date = request.POST.get('date')
        
#         # Preprocess and predict (as previously described)
#         # Preprocess the input date
#         date = pd.to_datetime(input_date)
#         print(date)
        
#         # Create a DataFrame for the model input
#         input_data = pd.DataFrame({
#             'year': [date.year],
#             'month': [date.month],
#             'day': [date.day],
#         })
#         print(input_data)
        
#         # Make prediction
#         prediction = online_model.predict(input_data)
        
#         return JsonResponse({'prediction': prediction[0]})

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


class CombinedSalesForecaster:
    def _init_(self):
        self.model = None
        self.daily_sales = None

    def fit_model(self, daily_sales):
        # Accept daily sales data directly for fitting the model
        self.daily_sales = daily_sales
        self.model = Prophet(yearly_seasonality=True, weekly_seasonality=True, daily_seasonality=False)
        self.model.fit(self.daily_sales)

    def save_model(self, filename='combined_sales_model.joblib'):
        # Save the fitted model
        dump(self.model, filename)

    def plot_forecast(self, forecast):
        # Plot the forecast
        fig = self.model.plot(forecast)
        plt.title("Sales Forecast")
        plt.axhline(y=forecast['yhat'].mean(), color='red', linestyle='--', label='Mean Prediction')
        plt.legend()
        plt.xlabel("Date")
        plt.ylabel("Predicted Sales")
        plt.show()

# Step 2: Prepare the data externally
def prepare_data(start_date, end_date):
    data = pd.read_csv('Ml_Models/COMBINED_MASTERDATA.csv')  # Load the dataset here
    data['Date'] = pd.to_datetime(data['Date']).dt.tz_localize(None)
    
    # Convert and filter dates
    start_date = pd.to_datetime(start_date).tz_localize(None)
    end_date = pd.to_datetime(end_date).tz_localize(None)
    data = data[(data['Date'] >= start_date) & (data['Date'] <= end_date)]
    
    # Aggregate daily sales
    daily_sales = data.groupby(data['Date'].dt.date).agg({'Total': 'sum'}).reset_index()
    daily_sales.rename(columns={'Date': 'ds', 'Total': 'y'}, inplace=True)
    return daily_sales

# Step 3: Test the Pipeline
import json

def run_forecasting_pipeline(json_input, periods=30):
    # Parse JSON input
    input_data = json.loads(json_input)
    start_date = input_data['start_date']
    end_date = input_data['end_date']
    
    # Prepare the data
    daily_sales = prepare_data(start_date, end_date)
    
    # Initialize the forecaster and fit the model
    forecaster = CombinedSalesForecaster()
    forecaster.fit_model(daily_sales)
    
    # Generate forecast
    future = forecaster.model.make_future_dataframe(periods=periods)
    forecast = forecaster.model.predict(future)
    
    return forecast


@csrf_exempt
def forecast_sales(request):
    if request.method == 'POST':
        try:
            json_input = request.body.decode('utf-8')
            print(f"Received JSON input: {json_input}")  # Debugging line
            input_data = json.loads(json_input)
            start_date = input_data['start_date']
            end_date = input_data['end_date']
            forecast = run_forecasting_pipeline(json_input)
            return JsonResponse({'forecast': forecast.to_dict(orient='records')}, status=200)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid method'}, status=405)
