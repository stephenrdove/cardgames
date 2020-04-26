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
  padding: 8px 16px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundOverlay};
  }
`;

type GameListProps = {
  games: Game[];
};

const GameList: React.SFC<GameListProps> = ({ games }) => (
  <List>
    {games.map((game) => (
      <ListItem key={game.id}>
        {game.name}
      </ListItem>
    ))}
  </List>
);

export default GameList;
