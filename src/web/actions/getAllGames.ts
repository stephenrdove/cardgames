import { getRequest } from './apiRequest';

export default function getAllGames(userId: number) {
  return getRequest<Game[]>(`/bus/user/${userId}`);
}
