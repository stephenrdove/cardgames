import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type Props = {
  card: CardInfo;
};

const cardHeight = 3.5;
const cardWidth = 2.5;
const cardGutterWidth = 0.45;

const cardColor = ({ color, theme }: ThemeProps<DefaultTheme> & CardInfo) => (color === 'red' ? theme.card.red : theme.card.black);

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: ${cardHeight * 100}px;
  width: ${cardWidth * 100}px;
  padding: ${cardGutterWidth * 100}px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.grey[900]};

  * {
    color: ${cardColor};
  }

  .portrait {
    border: 1px solid red;
    height: 100%;
    width: 100%;
  }
`;

const Card: React.SFC<Props> = ({ card }) => (
  <CardWrapper {...card}>
    <div className="portrait">
      I'm a card:
      {card.value}
      {card.suit}
      {card.color}
    </div>
  </CardWrapper>
);

export default Card;
