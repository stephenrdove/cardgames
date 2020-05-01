import styled from 'styled-components';

const Title = styled.h1`
  font-size: 32px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
  margin: 32px;
  color: ${({ theme }) => theme.colors.text};
`;

export default Title;
