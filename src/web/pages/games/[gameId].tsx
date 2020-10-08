import { NextPage, GetServerSideProps } from 'next';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';
import { ApiUrl } from '@env';
import Title from '@components/Title';
import PlayerHand from '@components/PlayerHand';
import Options from '@components/Options';

type GamePageProps = {
  game: Game;
};

const GameBoard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const GamePage: NextPage<GamePageProps> = ({ game }) => {
  if (game == null) {
    return null;
  }

  console.log(game);

  return (
    <div>
      <Title>{game.name}</Title>
      <Options gameId={game.id} options={game.options} />
      <GameBoard>
        <PlayerHand cards={game.current_hand} />
        {/* {game.current_card
          ? <Card card={getCard(game.current_card)} />
          : <span>TODO: empty card</span>} */}
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
