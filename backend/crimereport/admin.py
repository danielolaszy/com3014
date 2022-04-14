from django.contrib import admin
from .models import Crimereport

# Register your models here.
class crimereportAdmin(admin.ModelAdmin):
    list_display = ('location', 'description', 'created','modified', 'status','categories')

# Register your models here.

admin.site.register(Crimereport, crimereportAdmin)