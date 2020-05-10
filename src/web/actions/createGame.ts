import { postRequest } from './apiRequest';

export default async function createGame(userId: number) {
  const response = await postRequest<any>('/bus/new_game/', { user: userId });
  console.log(response);
}
