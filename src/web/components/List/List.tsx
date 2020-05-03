import styled from 'styled-components';

export const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.backgroundColor(2)};
  list-style: none;
  padding: 10px 0;
  margin: 16px;
`;

export default List;
