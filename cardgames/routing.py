from django.conf.urls import url

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

from bus.consumers import LobbyConsumer


application = ProtocolTypeRouter({
    # WebSocket 
    "websocket": AuthMiddlewareStack(
        URLRouter([
            url("lobby/", LobbyConsumer),
        ])
    ),
})