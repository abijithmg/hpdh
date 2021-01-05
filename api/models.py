from django.db import models

# Create your models here.
class Data(models.Model):
    data_id = models.CharField(max_length=200, primary_key=True)
    rule_name = models.CharField(max_length=400, blank=True, null=True)