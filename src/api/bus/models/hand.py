import numpy as np
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
from .game import Game

class Hand(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    cards = models.CharField(default="",max_length=200)

    def add_card(self, card, streak):
        if streak == 0:
            card_str = ""
        else:
            card_str = self.cards
            if streak > 1:
                card_str += ","
            card_str += card
        self.cards = card_str
        self.save()

    def __str__(self):
        return str(self.player) + "'s hand in " + str(self.game)