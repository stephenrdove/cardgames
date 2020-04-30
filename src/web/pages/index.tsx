import { Game } from '..';
import Title from '../components/Title';
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



export default function Home() {
  return (
    <div>
      <Title>Games</Title>
      <GameList games={sampleGames} />
    </div>
  );
}
