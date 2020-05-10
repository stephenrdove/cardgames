import { postRequest } from './apiRequest';

const playTurn = (gameId: number, selection: string) => {
  postRequest<any>(`/bus/game/${gameId}/`, { selection })
    .then((response) => {
      console.log(response);
    });
};

export default playTurn;
