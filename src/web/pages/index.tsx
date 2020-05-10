import { NextPage, GetServerSideProps } from 'next';
import Container from '@components/Container';
import Title from '@components/Title';
import Button from '@components/Button';
import GameList from '@components/GameList';
import createGame from '@actions/createGame';
import getAllGames from '@actions/getAllGames';

type Props = {
  games: Game[];
};

const HomePage: NextPage<Props> = ({ games = [] }) => (
  <Container>
    <Title>Games</Title>
    <Button onClick={() => createGame(1)}>Create Game</Button>
    <GameList games={games} />
  </Container>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const games = await getAllGames(1);

  return {
    props: {
      games,
    },
  };
};

export default HomePage;
