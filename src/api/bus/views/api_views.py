from bus.models import Game, User
from bus.models.turn import which_prompt
from bus.serializers import GameSerializer
from django.http import Http404,HttpResponseBadRequest, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class GameDetail(APIView):
    """
    Get the current game state
    """
    def get_game(self, pk):
        try:
            return Game.objects.get(pk=pk)
        except Game.DoesNotExist:
            raise Http404('<h1>Game Does Not Exist</h1>')

    def get(self, request, pk, format=None):
        game = self.get_game(pk)
        serializer = GameSerializer(game)
        return Response(serializer.data)
    
    """
    Plays the next turn
        - Expects request with "selection": selection_option field
            (i.e. "H" for higher or "B" for black)
    """
    def put(self, request, pk, format=None):
        game = self.get_game(pk)
        selection = request.data['selection']
        options = which_prompt(game.streak)['options']
        if game.completed or (selection not in options):
            return HttpResponseBadRequest('<h1>Bad Selection or Game Completed</h1>')
        game.next_turn(selection)
        return HttpResponse('<h1>Game Updated</h1>')



class CreateGame(APIView):
    """
    Create a new game
        - Expects request with "user": <user id> field
    """
    def post(self, request, format=None):
        user_pk = request.data['user']
        user = get_user(user_pk)
        game = Game.create_new(user=user)
        serializer = GameSerializer(game)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
 


class UserGames(APIView):
    def get(self, request, pk, format=None):
        user = get_user(pk)
        games = Game.objects.filter(player=user)
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)


def get_user(user_id):
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise Http404('<h1>User Does Not Exist</h1>')


