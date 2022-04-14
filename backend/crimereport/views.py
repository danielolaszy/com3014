from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CrimereportSerializer
from .models import Crimereport

# Create your views here.
class CrimereportView(viewsets.ModelViewSet):
    serializer_class = CrimereportSerializer
    queryset = Crimereport.objects.all()