from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from updatecase.models import updatecaseCrimereport
from updatecase.serializers import updatecaseCrimereportSerializer


def updatecasesAPI(request):
    updaterecord = updatecaseCrimereport.objects.all()
    updatedetails = updatecaseCrimereportSerializer(updaterecord, many=True)
    return JsonResponse(updatedetails.data, safe=False)