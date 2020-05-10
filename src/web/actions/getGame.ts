import { getRequest } from './apiRequest';

export default function getGame(gameId: number) {
  return getRequest<Game>(`/bus/game/${gameId}`);
}
