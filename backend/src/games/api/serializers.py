from rest_framework import serializers

from games.models import game

class gameSerializer(serializers.ModelSerializer):
    class Meta:
        model = game
        fields = ['player_1', 'player_2', 'information', 'embed','pgn','unique','clicked','gameembed']



class gameDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = game
        fields = [
            'player_1', 
            'player_2', 
            'information', 
            'embed', 
            'pgn',
            'unique',
            'clicked',
            'gameembed'
        ]


