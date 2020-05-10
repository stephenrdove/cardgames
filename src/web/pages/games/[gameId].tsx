import { NextPage, GetServerSideProps } from 'next';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import { ApiUrl } from '@env';
import Title from '../../components/Title';
import Options from '../../components/Options';
import Card from '../../components/Card';
import getCard from '../../utils/getCard';

type GamePageProps = {
  game: Game;
};

const GameBoard = styled.div`
  display: flex;
  flex-direction: row;
`;

const GamePage: NextPage<GamePageProps> = ({ game }) => {
  if (game == null) {
    return null;
  }

  return (
    <div>
      <Title>{game.name}</Title>
      <GameBoard>
        <Card card={getCard(game.current_card)} />
        <Options gameId={game.id} options={game.options} />
      </GameBoard>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<GamePageProps> = async (context) => {
  const { gameId } = context.query;
  const response = await fetch(`${ApiUrl}/bus/game/${gameId}`);

  if (response.ok) {
    const gameData = await response.json() as Game;
    return {
      props: {
        game: gameData,
      },
    };
  }

  return {
    props: {
      game: null as Game,
    },
  };
};

export default GamePage;
