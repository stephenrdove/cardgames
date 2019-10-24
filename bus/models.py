import datetime
import numpy as np
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User



class Game(models.Model):
    id = models.AutoField(primary_key=True)
    player = models.ForeignKey(User,on_delete=models.CASCADE)
    streak = models.IntegerField(default=0)
    rounds = models.IntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)


    @staticmethod
    def create_new(user):
        new_game = Game(player=user)
        new_game.save()
        Deck.create_new(new_game, 0, True)
        new_hand = Hand(player=user, game=new_game)
        new_hand.save()
        new_game.deal_new_card()
        return new_game

    @staticmethod
    def get_available_games():
        return Game.objects.filter(streak__lte=3)

    @staticmethod
    def get_games_for_player(user):
        return Game.objects.filter(player=user)

    @staticmethod
    def guess_color():
        prompt = "Red or Black?: "
        guess = Game._deal_with_input(prompt, ['R', 'B'])
        return lambda hand, new_card: new_card.color() == guess

    @staticmethod
    def guess_high_low():
        prompt = "Higher or Lower?: "
        guess = Game._deal_with_input(prompt, ['H', 'L', 'P'])
        func_map = {
            'H': lambda hand, new_card: new_card.value > hand[0].value,
            'L': lambda hand, new_card: new_card.value < hand[0].value,
            'P': lambda hand, new_card: new_card.value == hand[0].value
        }
        return func_map[guess]

    @staticmethod
    def guess_in_out():
        prompt = "Inside or Outside?: "
        guess = Game._deal_with_input(prompt, ['I', 'O', 'P'])
        func_map = {
            'O': lambda hand, new_card: 
                 new_card.value < hand[0].value or new_card.value > hand[1].value,
            'I': lambda hand, new_card: 
                 new_card.value > hand[0].value and new_card.value < hand[1].value,
            'P': lambda hand, new_card: new_card.value in [c.value for c in hand] 
        }
        return func_map[guess]

    @staticmethod
    def guess_suit():
        prompt = "Which Suit? (Hint: Always Clubs): "
        guess = Game._deal_with_input(prompt, ['H', 'C', 'D',' S'])
        return lambda hand,new_card: new_card.suit == guess

    @staticmethod  
    def _deal_with_input(prompt, accepted_input):
        done = False
        while not done:
            guess = input(prompt)
            done = guess in accepted_input
            if not done:
                print("Acceptable Inputs Include " + ', '.join(accepted_input))
        return guess

    def get_current_card(self):
        return Card.objects.get(cur_card_game=self)
    
    def get_current_hand(self):
        return Hand.objects.get(game=self,player=self.player)

    def get_cards_in_hand(self):
        hand = self.get_current_hand()
        return Card.objects.filter(hand=hand).order_by('value')

    def is_correct(self):
        hand = self.get_cards_in_hand()
        next_card = self.get_current_card()
        funcs = [Game.guess_color, Game.guess_high_low, Game.guess_in_out, Game.guess_suit]
        return funcs[self.streak](hand,next_card)
    
    def next_turn(self):
        if self.streak == 4:
            print('You already won...')
            return 
        self.new_card()
        print('Current Hand {}'.format(self.get_cards_in_hand()))
        if self.is_correct():
            self.streak += 1
            print('Correct! Card was {}'.format(self.get_current_card()))
            if self.streak == 4:
                # YOU WIN!
                print('you win')
                pass
        else:
            self.streak = 0
            print('Wrong! Card was {}'.format(self.get_current_card()))
        self.save()

    def new_card(self):
        # this is a mess up
        current_card = self.get_current_card()
        hand = self.get_current_hand()
        if self.streak > 0:
            current_card.hand = hand
            current_card.save()
        else:
            for card in Card.objects.filter(hand=hand):
                card.hand = None
                card.save()
        current_card.cur_card_game = None
        current_card.save()
        self.deal_new_card()
        
    def deal_new_card(self):
        deck = Deck.objects.get(game=self)
        if deck.removed_cards == 52 + deck.jokers:
            self.rounds += 1
            self.save()
            deck.collect_and_shuffle()

        new_card = Card.objects.get(deck=deck,
             shuffle_order=deck.removed_cards)
        new_card.cur_card_game = self
        new_card.in_deck = False
        new_card.save()
        deck.removed_cards += 1
        deck.save()
    
    def __str__(self):
        return 'Game {}'.format(self.id)


class Deck(models.Model):
    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    jokers = models.IntegerField(default=0)
    ace_high = models.BooleanField(default=False)
    removed_cards = models.IntegerField(default=0)

    @staticmethod
    def create_new(game, jokers, ace_high):
        new_deck = Deck(game=game, jokers=jokers, ace_high=ace_high)
        new_deck.save()
        values = np.arange(1+ace_high, 14+ace_high)
        suits = ["H", "S", "D", "C"]
        shuffle_order = np.arange(52+jokers)
        np.random.shuffle(shuffle_order)
        for i,val in enumerate(values):
            for j,suit in enumerate(suits):
                new_card = Card(deck=new_deck, suit=suit, 
                    value=val, shuffle_order=shuffle_order[((4*i)+j)])
                new_card.save()
        for j in range(jokers):
            new_card = Card(deck=new_deck, suit="Joker", value=0, 
                            shuffle_order=shuffle_order[-(j+1)])
            new_card.save()


    def collect_and_shuffle(self):
        cards = Card.objects.filter(deck=self,hand=None)
        num_cards = len(cards)
        shuffle_array = np.arange(num_cards)
        np.random.shuffle(shuffle_array)
        for i,card in enumerate(cards):
            card.shuffle_order = shuffle_array[i]
            card.in_deck = True
            card.save()
        self.removed_cards = 52 + self.jokers - num_cards
        self.save()
    
    def __str__(self):
        return 'Deck for ' + str(self.game)
    


class Hand(models.Model):
    player = models.ForeignKey(User, on_delete=models.CASCADE)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.player) + "'s hand in " + str(self.game)


class Card(models.Model):
    suit = models.CharField(max_length=10)
    value = models.IntegerField()
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    in_deck = models.BooleanField(default=True)
    hand = models.ForeignKey(Hand, on_delete=models.CASCADE,blank=True,null=True)
    cur_card_game = models.OneToOneField(Game, on_delete=models.CASCADE,blank=True,null=True)
    shuffle_order = models.IntegerField()
    
    def sort_value(self):
        suit_map = {"H": 0, "C": 1, "D": 2, "S": 3}
        if self.suit in suit_map:
            sort_value = self.value + (13*suit_map[self.suit])
        else: # If Joker
            sort_value = 60
        return sort_value
  
    def _display_value(self):
        value_map = {11: "J", 12: "Q", 13: "K", 14: "A", 1: "A", 0: "Joker"}
        if self.value in value_map:
            display_value = value_map[self.value]
        else: # If 2 - 9
            display_value = str(self.value)
        return display_value
    
    def color(self):
        color_map = {"H": "R", "D": "R", "C": "B", "S": "B"}
        if self.suit in color_map:
            return color_map[self.suit] 
        else:
            return "Joker"

    def __str__(self):
        suit_symbols = {"H": '\u2665', "C": '\u2663', "D": '\u2666', "S": '\u2660'}
        return self._display_value() + suit_symbols[self.suit]