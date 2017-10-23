from django.db import models
from django.db.models import Q
from django.db.models.signals import pre_save

from .utils import unique_slug_generator

class gameQuerySet(models.query.QuerySet):
    def active(self):
        return self.filter(active=True)

    def featured(self):
        return self.filter(featured=True)

    def search(self, query):
        return self.filter(
                Q(player_1__icontains=query) |
                Q(player_2__icontains=query) |
                Q(embed__icontains=query)
            )

class gameManager(models.Manager):
    def get_queryset(self):
        return gameQuerySet(self.model, using=self._db)

    def all(self):
        return self.get_queryset().active()


    def search(self, query):
        return self.get_queryset().search(query).active()


class game(models.Model):
    player_1 = models.CharField(max_length=100)
    player_2 = models.CharField(max_length=100)
    information = models.CharField(max_length=100)
    embed       = models.CharField(max_length=120, help_text='YouTube embed link', null=True, blank=True)
    gameembed = models.CharField(max_length=120, help_text='Lichess embed link', null=True, blank=True)
    unique = models.CharField(max_length=120, help_text='YouTube embed code', null=True, blank=True)
    pgn      = models.CharField(max_length=250)
    timestamp   = models.DateTimeField(auto_now_add=True)
    clicked = models.BooleanField(default=False)
    active      = models.BooleanField(default=True)

    objects = gameManager()

    def __str__(self): # __unicode__
        return self.information

