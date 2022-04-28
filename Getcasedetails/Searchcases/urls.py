from django.urls import path
from django.urls import URLPattern
from Searchcases import views

urlpatterns = [
    path(r'^getcasedetails$', views.searchcasesAPI),
    path(r'^getcasedetails/([0-9]+)$', views.searchcasesAPI)
]