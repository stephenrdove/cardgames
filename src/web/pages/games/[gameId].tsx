import { NextPage, GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import Title from '../../components/Title';
import Options from '../../components/Options';
import Card from '../../components/Card';
import getCard from '../../utils/getCard';
import styled from 'styled-components';

type GamePageProps = {
  game: Game;
};

const GameBoard = styled.div`
  display: flex;
  flex-direction: row;
`;

const GamePage: NextPage<GamePageProps> = ({ game }) => (
  <div>
    <Title>{game.name}</Title>
    <GameBoard>
      <Card card={getCard(game.current_card)} />
      <Options options={game.options} />
    </GameBoard>
  </div>
);

export const getServerSideProps: GetServerSideProps<GamePageProps> = async (context) => {
  const { gameId } = context.query;
  const response = await fetch(`http://127.0.0.1:8000/bus/game/${gameId}`);
  const gameData = await response.json() as Game;
  return {
    props: {
      game: gameData,
    },
  };
};

export default GamePage;
