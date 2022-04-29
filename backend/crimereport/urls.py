from django.urls import path
from . import views

urlpatterns = [
    path('', views.crimereport_list, name='crimereport_list'),
]