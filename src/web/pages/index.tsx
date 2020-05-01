import { NextPage, GetServerSideProps } from 'next';
import fetch from 'isomorphic-fetch';
import { Game } from '..';
import Title from '../components/Title';
import GameList from '../components/GameList';

type Props = {
  games: Game[];
};

const HomePage: NextPage<Props> = ({ games }) => (
  <div>
    <Title>Games</Title>
    <GameList games={games} />
  </div>
);

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const response = await fetch(`http://127.0.0.1:8000/bus/user/${1}/`);
  const gamesJson = await response.json() as Game[];

  return {
    props: {
      games: gamesJson,
    },
  };
};
// export const getServerSideProps: GetServerSideProps<Props> = async () => ({
//   props: {
//     games: [
//       {
//         id: 1,
//         name: 'First game',
//         streak: 0,
//         player: 1,
//         current_card: '',
//         prompt: 'Red or Black?',
//         options: [
//           'R',
//           'B',
//         ],
//         current_hand: [],
//         completed: false,
//       },
//       {
//         id: 2,
//         name: 'Second game',
//         streak: 2,
//         player: 1,
//         current_card: '3D',
//         prompt: 'Inside or Outside?',
//         options: [
//           'I',
//           'O',
//           'P',
//         ],
//         current_hand: ['3D', '14D'],
//         completed: false,
//       },
//     ],
//   },
// });

export default HomePage;
