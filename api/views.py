from django.shortcuts import render
# from django.http import HttpResponse
from rest_framework import generics
from .models import Data
from .serializers import DataSerializer


class DataView(generics.ListCreateAPIView):
    queryset= Data.objects.all()
    serializer_class = DataSerializer


class DataListView(generics.RetrieveUpdateDestroyAPIView):
    queryset= Data.objects.all()
    serializer_class = DataSerializer
