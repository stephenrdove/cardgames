import { getRequest } from './apiRequest';

export default function getGames(userId: number) {
  return getRequest<Game[]>(`/bus/user/${userId}`);
}
