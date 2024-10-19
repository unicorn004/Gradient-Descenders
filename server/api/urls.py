from .views import home_view,figure
from django.urls import path

urlpatterns = [
    path('', home_view, name='home'),
    path('figure/', figure, name='figure'),
]