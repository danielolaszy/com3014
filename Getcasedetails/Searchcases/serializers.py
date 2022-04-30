# from pyexpat import model
# from attr import fields
from rest_framework import serializers
from Searchcases.models import SearchcasesCrimereport

class SearchcasesCrimereportSerializer(serializers.ModelSerializer):
    class Meta:
        model = SearchcasesCrimereport
        fields = ('id','location','description','created','modified','status','categories','crime_date')