import styled from 'styled-components';
import playTurn from 'actions/playTurn';

type Props = {
  gameId: number;
  options: string[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;


  button {
    background-color: ${({ theme }) => theme.buttons.primary};
    color: ${({ theme }) => theme.buttons.text};
    border: none;
    padding: 6px 16px;
    margin: 20px 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Options: React.FC<Props> = ({ gameId, options }) => (
  <Wrapper>
    {options && options.map((option) => (
      <button
        key={option}
        type="button"
        onClick={() => playTurn(gameId, option)}
      >
        {option}
      </button>
    ))}
  </Wrapper>
);

export default Options;
