from rest_framework import serializers
from bus.models.turn import which_prompt
from bus.models import Game, Hand
    
class GameSerializer(serializers.ModelSerializer):
    prompt = serializers.SerializerMethodField()
    options = serializers.SerializerMethodField()
    current_hand = serializers.SerializerMethodField()
    
    class Meta:
        model = Game
        fields = ['id', 'streak', 'player', 'current_card', 'prompt', 'options', 'current_hand', 'completed']
    
    def get_prompt(self, obj):
        if obj.completed:
            return ''
        return which_prompt(obj.streak)['prompt']
    def get_options(self, obj):
        if obj.completed:
            return ''
        return which_prompt(obj.streak)['options']
    def get_current_hand(self,obj):
        return obj.get_cards_in_hand()

