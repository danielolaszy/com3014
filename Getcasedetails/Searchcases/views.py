from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from Searchcases.models import SearchcasesCrimereport
from Searchcases.serializers import SearchcasesCrimereportSerializer

# # Create your views here.
# @csrf_exempt
# def searchcasesAPI(request, caseid=0):
#     if request.method == 'GET':
#         searchcase = SearchcasesCrimereport.objects.get(id = caseid)
#         searchcase_serial = SearchcasesCrimereportSerializer(searchcase)
#         return JsonResponse(searchcase_serial.data, safe=False)

def searchcasesAPI(request):
    crimereports = SearchcasesCrimereport.objects.all()
    serializer = SearchcasesCrimereportSerializer(crimereports, many=True)
    return JsonResponse(serializer.data, safe=False)