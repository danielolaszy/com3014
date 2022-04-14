from sre_constants import CATEGORY
from django.db import models
from django.utils import timezone


# Create your models here.
class Crimereport(models.Model):
    # first element in each tuple is the actual value to be set on the model, and the second element is the human-readable name
    CATEGORY_CHOICES= (
        ("Anti-social behaviour","Anti-social behaviour"),
        ("Bicycle-theft","Bicycle-theft"),
        ("Burglary","Burglary"),
        ("Criminal damage and arson","Criminal damage and arson"),
        ("Drugs","Drugs"),
        ("Other theft","Other theft"),
        ("Possession of weapons","Possession of weapons"),
        ("Public order","Public order"),
        ("Robbery","Robbery"),
        ("Shoplifting","Shoplifting"),
        ("Theft from the person","Theft from the person"),
        ("Vehicle crime","Vehicle crime"),
        ("Violence and sexual offences","Violence and sexual offences"),
        ("Other crime","Other crime"),
        
    )


    location = models.CharField(max_length=120)
    description = models.TextField()

    ## created and modified are fields that are created and modified by django not by the user
    created = models.DateTimeField(editable=False)  # intially was month in the 'uml' diagram 
    modified = models.DateTimeField(editable=False) # intially was month in the 'uml' diagram
    status = models.CharField(max_length=120, default="pending")    # status should be hidden in the frontend since this is controlled by admin
    categories = models.CharField(max_length = 100, choices = CATEGORY_CHOICES, default="Picking option")



    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Crimereport, self).save(*args, **kwargs)