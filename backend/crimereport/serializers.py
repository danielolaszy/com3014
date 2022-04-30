from rest_framework import serializers
from .models import Crimereport

class CrimereportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crimereport
        fields = ('id','location', 'description', 'created', 'modified','categories','status', 'crime_date')
