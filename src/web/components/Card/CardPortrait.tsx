/* eslint-disable no-plusplus */
/* eslint-disable no-case-declarations */
import styled from 'styled-components';
import getCardLayout from '@utils/getCardLayout';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-grow: 1;

  ul {
    list-style: none;
    padding: 10px;

    &.row {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    li {
      font-size: 60px;
      line-height: 40px;
    }
  }
`;

const CardPortrait: React.FC<CardInfo> = ({ value, suitSymbol }) => {
  const portraitContent: JSX.Element[] = [];

  switch (value) {
    case '2':
    case '3':
      const column: JSX.Element[] = [];

      for (let i = 0; i < parseInt(value); i++) {
        column.push(<li key={i}>{suitSymbol}</li>);
      }

      portraitContent.push(<ul key="col" className="column">{column}</ul>);
      break;
    case '9':
      const row1: JSX.Element[] = [];
      const row2: JSX.Element[] = [];
      const row3: JSX.Element[] = [];

      for (let i = 0; i < parseInt(value); i++) {
        switch (i % 3) {
          case 0:
            row1.push(<li key={i}>{suitSymbol}</li>);
            break;
          case 1:
            row2.push(<li key={i}>{suitSymbol}</li>);
            break;
          case 2:
            row3.push(<li key={i}>{suitSymbol}</li>);
            break;
          default:
            throw new Error(`Recieved an unexpected modulus: ${i % 3}`);
        }
      }

      portraitContent.push(<ul key="1" className="row">{row1}</ul>);
      portraitContent.push(<ul key="2" className="row">{row2}</ul>);
      portraitContent.push(<ul key="3" className="row">{row3}</ul>);

      break;
    default:
      throw new Error(`Received an invalid value: ${value}`);
  }

  return (
    <Wrapper>
      {portraitContent}
    </Wrapper>
  );
};

export default CardPortrait;
