import { NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { Game } from '../../';
import Title from '../../components/Title';

type GamePageProps = {
  game: Game;
}

const GamePage: NextPage<GamePageProps> = ({ game }) => {
  return (
    <div>
      <Title>{game.name}</Title>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<GamePageProps> = async context => {
  const { gameId } = context.query;
  return {
    props: {
      game: {
        id: parseInt(gameId as string),
        name: 'Second game',
        streak: 2,
        player: 1,
        current_card: '3D',
        prompt: 'Inside or Outside?',
        options: [
          'I',
          'O',
          'P',
        ],
        current_hand: ['3D', '14D'],
        completed: false,
      }
    }
  };
};

export default GamePage;
