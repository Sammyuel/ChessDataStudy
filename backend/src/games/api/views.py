from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAdminUser

from games.models import game
from .serializers import gameSerializer, gameDetailSerializer


class gameList(generics.ListAPIView):
    serializer_class        = gameSerializer
    permission_classes      = []
    authentication_classes  = []

    def get_queryset(self):
        query = self.request.GET.get("q")
        if query:
            # qs = game.objects.filter(name__icontains=query)
            qs = game.objects.search(query)
        else:
            qs = game.objects.all()
        return qs


