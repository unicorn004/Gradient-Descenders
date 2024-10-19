from django.views.decorators.csrf import csrf_protect
from django.http import JsonResponse
from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.contrib import messages
import requests

User = get_user_model()

@csrf_protect
def signup_template_view(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')

        if not name or not email or not password1 or not password2:
            messages.error(request, 'All fields are required')
        elif password1 != password2:
            messages.error(request, 'Passwords do not match')
        elif len(password1) < 6:
            messages.error(request, 'Password must be at least 6 characters')
        elif User.objects.filter(email=email).exists():
            messages.error(request, 'Email already exists')
        else:
            user = User.objects.create_user(email=email, password=password1, name=name)
            user.save()
            messages.success(request, 'User created successfully')
            # return redirect('signin')  # Redirect to the signin page after successful signup

    return render(request, 'SignUp.html')
