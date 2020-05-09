from django.db import models
from django.contrib.auth.models import User
from ...cards.models import card
from . import turn

class Game(models.Model):
    id = models.AutoField(primary_key=True)
    player = models.ForeignKey(User,on_delete=models.CASCADE)
    completed = models.BooleanField(default=False)
    current_card = models.CharField(default="",max_length=3)
    streak = models.IntegerField(default=0)
    rounds = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "bus_game"


    @staticmethod
    def create_new(user):
        new_game = Game(player=user)
        new_game.save()
        Deck.create_new(new_game, True)
        new_hand = Hand(player=user, game=new_game)
        new_hand.save()
        new_game.send_game_info()
        return new_game

    @staticmethod
    def get_available_games():
        return Game.objects.filter(streak__lte=3)

    @staticmethod
    def get_games_for_player(user):
        return Game.objects.filter(player=user)
    
    def get_current_hand(self):
        return Hand.objects.get(game=self,player=self.player)

    def get_cards_in_hand(self):
        hand = self.get_current_hand()
        if hand.cards == '':
            return []
        cards = hand.cards.split(',')
        cards.sort(key=card.value)
        return cards

    def is_correct(self, guess):
        hand = self.get_cards_in_hand()
        next_card = self.current_card
        return turn.which_guess(self.streak)(guess)(hand,next_card)
    
    def next_turn(self, guess):
        if self.completed:
            print('You already won...')
            return 
        self.deal_new_card()
        if self.is_correct(guess):
            self.streak += 1
            if self.streak == 4:
                self.completed = True
        else:
            self.streak = 0
        self.save()
        self.update_hand()
        self.send_game_info()

    def update_hand(self):
        hand = self.get_current_hand()
        hand.add_card(self.current_card, self.streak)
        
    def deal_new_card(self):
        deck = Deck.objects.get(game=self)
        if deck.card_count == len(deck._get_card_list()):
            self.rounds += 1
            deck.collect_and_shuffle()
        self.current_card = deck._get_card_list()[deck.card_count]
        self.save()
        deck.card_count += 1
        deck.save()
    
    def send_game_info(self):
        if self.streak > 0:
            print('Correct! Card was {}'.format(self.current_card))
            if self.streak == 4:
                print('Congratulations! You win!')
                return
        elif self.current_card:
            print('Wrong! Card was {}'.format(self.current_card))
        print('Game: {}\nPlayer: {}'.format(self, self.player))
        print('Current Hand: {}'.format(self.get_cards_in_hand()))
        turn_dict = turn.which_prompt(self.streak)
        print('Prompt: {}\nOptions: {}'.format(turn_dict['prompt'], turn_dict['options']))

    def __str__(self):
        return 'Game {}'.format(self.id)

from ...cards.models.deck import Deck
from .hand import Hand