from django.db import models

# Create your models here.
class SearchcasesCrimereport(models.Model):
    id = models.BigIntegerField(primary_key=True)
    location = models.CharField(max_length=120)
    description = models.TextField()
    created = models.DateTimeField()
    modified = models.DateTimeField()
    status = models.CharField(max_length=120)
    categories = models.CharField(max_length=100)
    crime_date = models.DateField()
    
    class Meta:
       managed = False
       db_table = 'crimereport_crimereport'