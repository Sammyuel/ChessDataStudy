from django.db import models
from django.contrib.auth.models import User, Permission



class Titles(models.Model):
    user = models.ForeignKey(User, default =1)
    profit = models.BigIntegerField(default = 0)
    Title = models.CharField(max_length=250)
    Title_logo = models.FileField(upload_to='photos')
    def __str__(self):
        return self.Title
