# views.py
from rest_framework import viewsets
from .models import RestaurantData
from .serializers import RestraurantTransactionSerializer,RestaurantSalesSerializer

class RestaurantSalesViewSet(viewsets.ModelViewSet):
    queryset = RestaurantData.objects.all()
    serializer_class = RestaurantSalesSerializer

class RestraurantTransactionsViewSet(viewsets.ModelViewSet):
    queryset = RestaurantData.objects.all()
    serializer_class = RestraurantTransactionSerializer
