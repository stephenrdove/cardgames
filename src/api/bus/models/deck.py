import numpy as np
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from .game import Game
from .hand import Hand

class Deck(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    ace_high = models.BooleanField(default=False)
    cards = models.CharField(default="",max_length=200)
    card_count = models.IntegerField(default=0)

    @staticmethod
    def _create_cards(ace_high):
        values = np.arange(1+ace_high, 14+ace_high)
        suits = ["H", "S", "D", "C"]
        return [str(val) + suit for val in values for suit in suits]

    @staticmethod
    def create_new(game, ace_high):
        cards = Deck._create_cards(ace_high)
        np.random.shuffle(cards)
        cards_str = ','.join(cards) 
        new_deck = Deck(game=game, ace_high=ace_high, cards=cards_str)
        new_deck.save()

    def _get_card_list(self):
        return self.cards.split(',')

    def collect_and_shuffle(self):
        hand = Hand.objects.get(game=self.game)
        cards_in_hand = hand.cards.split(',')
        all_cards = Deck._create_cards(self.ace_high)
        cards = [card for card in all_cards if card not in cards_in_hand]
        np.random.shuffle(cards)
        cards_str = ','.join(cards)
        self.cards = cards_str
        self.card_count = 0
        self.save()
    
    def __str__(self):
        return 'Deck for ' + str(self.game)