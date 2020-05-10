import styled from 'styled-components';
import Card from '@components/Card';
import getCard from '@utils/getCard';

type Props = {
  cards: string[];
};

const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;

  .stacked-card {
    margin-left: -100px; /* TODO: make this dynamic */

    &:first-child {
      margin-left: 0;
    }
  }
`;

const PlayerHand: React.FC<Props> = ({ cards }) => {
  if (!cards || cards.length <= 0) {
    return null;
  }

  return (
    <Wrapper>
      {cards.map((card, i) => (
        <li key={card} className="stacked-card" style={{ zIndex: i }}>
          <Card card={getCard(card)} />
        </li>
      ))}
    </Wrapper>
  );
};

export default PlayerHand;
