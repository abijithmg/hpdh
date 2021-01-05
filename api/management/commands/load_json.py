from django.core.management.base import BaseCommand, CommandError
from api.models import Data
import requests
import json

class Command(BaseCommand):
    help = "Load the json vales into DB, provided my 3rd party api endpoint"

    def handle(self, *args, **options):
        response = requests.get("http://jivoxdevuploads.s3.amazonaws.com/eam-dev/files/44939/Rule%20JSON.json")
        data_dict = json.loads(response.text)
        breakpoint()

        for data in data_dict['data']:
            data, created = Data.objects.update_or_create(data_id=data['id'], rule_name=data["ruleName"])