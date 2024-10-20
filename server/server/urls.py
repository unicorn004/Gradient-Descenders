# urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from inputs.views import RestaurantSalesViewSet,RestraurantTransactionsViewSet,ReinforcementDataViewSet

# from dashboard.views import SalesPredictionViewSet

router = routers.DefaultRouter()
router.register('restaurant-data', RestaurantSalesViewSet),
router.register('restaurant-transactions', RestraurantTransactionsViewSet,basename='unique_basename'),
router.register('reinforcementdata', ReinforcementDataViewSet, basename='reinforcementdata')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/', include(router.urls)),
    path('dashboard/', include('dashboard.urls'))
]
