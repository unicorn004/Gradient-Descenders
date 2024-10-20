from rest_framework import viewsets
from .models import RestaurantData, ReinforcementData
from .serializers import RestraurantTransactionSerializer, RestaurantSalesSerializer, ReinforcementDataSerializer

class RestaurantSalesViewSet(viewsets.ModelViewSet):
    queryset = RestaurantData.objects.all()
    serializer_class = RestaurantSalesSerializer

class RestraurantTransactionsViewSet(viewsets.ModelViewSet):
    queryset = RestaurantData.objects.all()
    serializer_class = RestraurantTransactionSerializer

class ReinforcementDataViewSet(viewsets.ModelViewSet):
    queryset = ReinforcementData.objects.all()
    serializer_class = ReinforcementDataSerializer
