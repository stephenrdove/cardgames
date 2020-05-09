from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('user/<int:pk>/', views.UserGames.as_view()),
    path('game/<int:pk>/', views.GameDetail.as_view()),
    path('new_game/', views.CreateGame.as_view()),
]