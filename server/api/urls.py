from django.urls import path, include

urlpatterns = [
    # Include the inputs app URLs under the /api/ path
    path('api/', include('inputs.urls')),
]
