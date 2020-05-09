import styled, { ThemeProps, DefaultTheme } from 'styled-components';

type Props = {
  card: CardInfo;
};

const cardHeight = 3.5;
const cardWidth = 2.5;
const cardGutterWidth = 0.45;

const cardColor = ({ color, theme }: ThemeProps<DefaultTheme> & CardInfo) => (color === 'red' ? theme.card.red : theme.card.black);
const cardSuitSymbol = ({ suitSymbol }: ThemeProps<DefaultTheme> & CardInfo) => suitSymbol;

const CardWrapper = styled.div`
  position: relative;
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

  &:before {
    content: '${cardSuitSymbol}';
    color: ${cardColor};
    font-size: 50px;
    position: absolute;
    top: 0;
    left: 0;
  }

  * {
    color: ${cardColor};
  }

  .portrait {
    border: 2px solid ${cardColor};
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


const NewCardWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  height: ${cardHeight * 100}px;
  width: ${cardWidth * 100}px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.grey[900]};

  * {
    color: ${cardColor};
  }

  .gutter {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    flex: 0 0 ${cardGutterWidth * 100}px;
    padding: 10px 0;

    .value {
      font-size: 30px;
    }

    .suit {
      font-size: 30px;
      line-height: 20px
    }

    &:last-child {
      flex-flow: column-reverse;

      .value,
      .suit {
        transform: rotate(180deg);
      }
    }
  }
`;

const NewCard: React.FC<Props> = ({ card }) => (
  <NewCardWraper {...card}>
    <div className="gutter">
      <span className="value">{card.value}</span>
      <span className="suit">{card.suitSymbol}</span>
    </div>
    <div className="portrait" />
    <div className="gutter">
      <span className="value">{card.value}</span>
      <span className="suit">{card.suitSymbol}</span>
    </div>
  </NewCardWraper>
);

export default NewCard;
