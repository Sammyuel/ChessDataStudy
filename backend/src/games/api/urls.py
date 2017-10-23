from django.conf.urls import url

from .views import gameList

urlpatterns = [
    url(r'^$', gameList.as_view()),
]
