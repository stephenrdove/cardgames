from bus.models import Game
from bus.serializers import GameSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class GameDetail(APIView):
    """
    Retrieve, update or delete a snippet instance.
    """
    def get_game(self, pk):
        try:
            return Game.objects.get(pk=pk)
        except Game.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        game = self.get_game(pk)
        serializer = GameSerializer(game)
        return Response(serializer.data)

class UserGames(APIView):
    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        user = self.get_user(pk)
        games = Game.objects.filter(player=user)
        serializer = GameSerializer(games, many=True)
        return Response(serializer.data)


'''
@csrf_exempt
def game_list(request,user):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        games = Game.objects.filter(player=user)
        serializer = GameSerializer(games, many=True)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def game_turn(request, pk):
    """
    Retrieve, update or delete a code snippet.
    """
    try:
        game = Game.objects.get(pk=pk)
    except Game.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = GameSerializer(game)
        return JsonResponse(serializer.data)
'''
