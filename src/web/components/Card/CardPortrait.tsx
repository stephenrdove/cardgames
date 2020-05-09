import styled from 'styled-components';
import getCardLayout from '@utils/getCardLayout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-grow: 1;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    padding: 0px;

    &:only-child {
      margin-right: auto;
      margin-left: auto;
    }
    &:nth-child(1) {
      order: 1;
    }
    &:nth-child(2) {
      order: 3;
    }
    &:nth-child(3) {
      order: 2;
    }

    li {
      font-size: 70px;
      line-height: 50px;
    }
  }
`;

const CardPortrait: React.FC<CardInfo> = ({ value, suitSymbol }) => {
  const portraitContent: JSX.Element[] = [];

  const intValue = parseInt(value);
  if (!Number.isNaN(intValue)) {
    const layout = getCardLayout(intValue);

    const columns: JSX.Element[][] = [];

    let currentColumn = -1; // will be incremented on first iteration

    for (let i = 0; i < intValue; i++) {
      if (i % layout.columnMax === 0) {
        currentColumn++;
        columns[currentColumn] = [];
      }

      columns[currentColumn].push(<li key={i}>{suitSymbol}</li>);
    }

    columns.forEach((col, i) => {
      // eslint-disable-next-line react/no-array-index-key
      portraitContent.push(<ul key={i}>{col}</ul>);
    });
  }

  return (
    <Wrapper>
      {portraitContent}
    </Wrapper>
  );
};

export default CardPortrait;
