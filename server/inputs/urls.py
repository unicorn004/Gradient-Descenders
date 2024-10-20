from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import RestaurantSalesViewSet, RestraurantTransactionsViewSet, ReinforcementDataViewSet

router = DefaultRouter()
router.register(r'restaurantdata', RestaurantSalesViewSet)  # Register restaurant data viewset
router.register(r'restauranttransactions', RestraurantTransactionsViewSet)  # Register transaction data viewset
router.register(r'reinforcementdata', ReinforcementDataViewSet)  # Register reinforcement data viewset

urlpatterns = [
    path('api/', include(router.urls)),  # Include the router URLs under the 'api/' path
]