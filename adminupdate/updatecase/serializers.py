# from pyexpat import model
# from attr import fields
from rest_framework import serializers
from updatecase.models import updatecaseCrimereport

class updatecaseCrimereportSerializer(serializers.ModelSerializer):
    class Meta:
        model = updatecaseCrimereport
        fields = ('id','location','description','created','modified','status','categories','crime_date')