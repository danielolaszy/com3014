from django.db import models
from django.utils import timezone


# Create your models here.
class Crimereport(models.Model):
    location = models.CharField(max_length=120)
    description = models.TextField()
    created = models.DateTimeField(editable=False)
    modified = models.DateTimeField(editable=False) # intially was month in the 'uml' diagram
    status = models.CharField(max_length=120, default="pending")

    categories = null

    # use choices for categories


    def save(self, *args, **kwargs):
        ''' On save, update timestamps '''
        if not self.id:
            self.created = timezone.now()
        self.modified = timezone.now()
        return super(Crimereport, self).save(*args, **kwargs)