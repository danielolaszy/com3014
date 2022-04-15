from sre_constants import CATEGORY
from django.db import models
from django.utils import timezone
import datetime
from django.core.exceptions import ValidationError
from django.core.validators import MaxValueValidator




# Create your models here.
class Crimereport(models.Model):

    def __str__(self):
        return self.description
        
    def check_date(crime_date):
        if crime_date > datetime.date.today() == True:
            raise ValidationError("The date cannot be in the future!")


    # first element in each tuple is the actual value to be set on the model, and the second element is the human-readable name
    CATEGORY_CHOICES= (
        ("anti-social-behaviour","Anti-social behaviour"),
        ("bicycle-theft","Bicycle-theft"),
        ("burglary","Burglary"),
        ("criminal-damage-arson","Criminal damage and arson"),
        ("drugs","Drugs"),
        ("other-theft","Other theft"),
        ("possession-of-weapons","Possession of weapons"),
        ("public-order","Public order"),
        ("robbery","Robbery"),
        ("shoplifting","Shoplifting"),
        ("theft-from-the-person","Theft from the person"),
        ("vehicle-crime","Vehicle crime"),
        ("violent-crime","Violence and sexual offences"),
        ("other-crime","Other crime"),
        
    )


    location = models.CharField(max_length=120)
    description = models.TextField()

    ## created and modified are fields that are created and modified by django not by the user
    created = models.DateTimeField(editable=False)  # intially was month in the 'uml' diagram 
    modified = models.DateTimeField(editable=False) # intially was month in the 'uml' diagram
    status = models.CharField(max_length=120, default="pending",blank=True)    # status should be hidden in the frontend since this is controlled by admin
    categories = models.CharField(max_length = 100, choices = CATEGORY_CHOICES, default="Picking option")
    


    # format of the 
    crime_date = models.DateField(validators=[MaxValueValidator(datetime.date.today())])


        

    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()

        return super(Crimereport, self).save(*args, **kwargs)