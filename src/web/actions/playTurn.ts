import { putRequest } from './apiRequest';

const playTurn = (gameId: number, selection: string) => {
  putRequest<any>(`/bus/game/${gameId}/`, { selection })
    .then((response) => {
      console.log(response);
    });
};

export default playTurn;
