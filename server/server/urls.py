# urls.py
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from inputs.views import RestaurantSalesViewSet, RestraurantTransactionsViewSet

# from dashboard.views import SalesPredictionViewSet

router = routers.DefaultRouter()

router.register('restaurant-data', RestaurantSalesViewSet)
router.register('restaurant-transactions', RestraurantTransactionsViewSet, basename='unique_basename')
# router.register('sales-prediction', SalesPredictionViewSet, basename='sales-prediction')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('accounts.urls')),
    path('api/', include(router.urls)),
    path('dashboard/', include('dashboard.urls'))
]
