import styled from 'styled-components';
import { Game } from '..';
import GameList from '../components/GameList';

const sampleGames: Game[] = [
  {
    id: 1,
    name: 'First game',
    streak: 0,
    player: 1,
    current_card: '',
    prompt: 'Red or Black?',
    options: [
      'R',
      'B',
    ],
    current_hand: [],
    completed: false,
  },
  {
    id: 2,
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
  },
];

const Title = styled.h1`
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 32px;
  color: ${({ theme }) => theme.colors.text};
`;

export default function Home() {
  return (
    <div>
      <Title>Ride the Bus</Title>
      <GameList games={sampleGames} />
    </div>
  );
}
