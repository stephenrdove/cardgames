import styled from 'styled-components';
import { Button } from '../components/Container';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const BigButton = styled(Button)`
  font-size: 100px;
  &:hover {
    background-color: blue;
  }
`;

export default function Home() {
  return (
    <div>
      <Title>Let`&apos;`s ride the bus!</Title>
      <BigButton>I`&apos;`m a button</BigButton>
    </div>
  );
}
