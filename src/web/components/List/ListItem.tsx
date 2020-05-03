import styled from 'styled-components';

export const ListItem = styled.li`
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

export default ListItem;
