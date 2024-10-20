# serializers.py
from rest_framework import serializers
from .models import RestaurantData,RestraurantTransaction,ReinforcementData

class RestaurantSalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestaurantData
        fields = '__all__'


class RestraurantTransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = RestraurantTransaction
        fields = '__all__' 

class ReinforcementDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = ReinforcementData
        fields = ['start_date', 'end_date']