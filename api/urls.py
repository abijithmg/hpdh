from django.urls import path
from .views import DataView,DataListView

urlpatterns = [
    path('', DataView.as_view()),
    path('list/', DataListView.as_view()),
]
