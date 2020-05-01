import { NextPage, GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import { Game } from '../..';
import Title from '../../components/Title';
import Options from '../../components/Options';
import Card from '../../components/Card';
import getCard from '../../utils/getCard';

type GamePageProps = {
  game: Game;
};

const GamePage: NextPage<GamePageProps> = ({ game }) => (
  <div>
    <Title>{game.name}</Title>
    <Options options={game.options} />
    <Card card={getCard(game.current_card)} />
  </div>
);

export const getServerSideProps: GetServerSideProps<GamePageProps> = async (context) => {
  const { gameId } = context.query;
  const response = await fetch(`http://127.0.0.1:8000/bus/game/${gameId}`);
  const gameData = await response.json() as Game;
  return {
    props: {
      game: gameData,
      // game: {
      //   id: parseInt(gameId as string),
      //   name: 'Second game',
      //   streak: 2,
      //   player: 1,
      //   current_card: '3D',
      //   prompt: 'Inside or Outside?',
      //   options: [
      //     'I',
      //     'O',
      //     'P',
      //   ],
      //   current_hand: ['3D', '14D'],
      //   completed: false,
      // },
    },
  };
};

export default GamePage;
