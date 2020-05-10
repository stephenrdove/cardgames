import { putRequest } from './apiRequest';
import getGame from './getGame';

const playTurn = (gameId: number, selection: string) => {
  putRequest<null>(`/bus/game/${gameId}/`, { selection })
    .then((response) => {
      console.log(response);
      getGame(gameId)
        .then((game) => {
          console.log(game);
        });
    });
};

export default playTurn;
