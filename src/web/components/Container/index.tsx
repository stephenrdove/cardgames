import styled from 'styled-components';

const black = 'white';

export const Button = styled.button`
  background: pink;
  color: ${black};
`;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export default Container;
