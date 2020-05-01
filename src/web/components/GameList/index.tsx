import Link from 'next/link';
import styled from 'styled-components';
import { Game } from '../..';

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.backgroundColor(2)};
  list-style: none;
  padding: 10px 0;
  margin: 16px;
`;

const ListItem = styled.li`
  color: ${({ theme }) => theme.colors.text};  
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundOverlay};
  }

  a {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
  }
`;

type Props = {
  games: Game[];
};

const GameList: React.SFC<Props> = ({ games }) => (
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

export default GameList;
