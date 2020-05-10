import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import CardPortrait from './CardPortrait';

type Props = {
  card: CardInfo;
};

const cardHeight = 3.5;
const cardWidth = 2.5;
const cardGutterWidth = 0.45;

const cardColor = ({ color, theme }: ThemeProps<DefaultTheme> & CardInfo) => (color === 'red' ? theme.card.red : theme.card.black);

const CardWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  height: ${cardHeight * 100}px;
  width: ${cardWidth * 100}px;
  margin: 0 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 2px 2px ${({ theme }) => theme.colors.grey[900]},
    0 0px 0px 1px rgba(0,0,0,0.2);

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

const Card: React.FC<Props> = ({ card }) => (
  <CardWraper {...card}>
    <div className="gutter">
      <span className="value">{card.value}</span>
      <span className="suit">{card.suitSymbol}</span>
    </div>
    <CardPortrait {...card} />
    <div className="gutter">
      <span className="value">{card.value}</span>
      <span className="suit">{card.suitSymbol}</span>
    </div>
  </CardWraper>
);

export default Card;
