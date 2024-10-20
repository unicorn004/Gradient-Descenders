from django.urls import path
from . import views

urlpatterns = [
    # path('', views.predict, name='predict'),
    path('forecast/', views.forecast, name='forecast'),
    path('forecastSales/', views.forecast_sales, name='forecast')
]