"""cardgames URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from bus.views import CreateUserView,LobbyView,HomeView
from django.contrib.auth import views as auth_views

versioned_urlpatterns = [
    path('accounts/', include('rest_registration.api.urls')),
]

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', CreateUserView.as_view()),
    path('login/', auth_views.LoginView.as_view(), {'template_name': 'login.html'}),
    path('logout/', auth_views.LogoutView.as_view(), {'next_page': '/'}),
    path('lobby/', LobbyView.as_view()),
    path('bus/',include('bus.urls')),
    path('', HomeView.as_view()),
    path('api/v1/', include(versioned_urlpatterns)),
]