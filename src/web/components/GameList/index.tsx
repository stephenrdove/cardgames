import Link from 'next/link';
import { Game } from '../..';
import { List, ListItem, EmptyList } from '../List';

type Props = {
  games: Game[];
};

const GameList: React.FC<Props> = ({ games }) => {
  if (games.length <= 0) {
    return <EmptyList message="No games" />;
  }

  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id}>
          <Link href={`/games/${game.id}`}>
            <a>{game.name}</a>
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default GameList;
