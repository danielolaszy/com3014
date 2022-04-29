from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CrimereportSerializer
from .models import Crimereport
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse


# Create your views here.
class CrimereportView(viewsets.ModelViewSet):
    serializer_class = CrimereportSerializer
    queryset = Crimereport.objects.all()

def crimereport_list(request):
    """
    List all crimereport, or create a new crimereport.
    """
    crimereports = Crimereport.objects.all()
    serializer = CrimereportSerializer(crimereports, many=True)
    return JsonResponse(serializer.data, safe=False)