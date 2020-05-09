import styled from 'styled-components';

type Props = {
  options: string[];
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  button {
    background-color: ${({ theme }) => theme.buttons.primary};
    color: ${({ theme }) => theme.buttons.text};
    border: none;
    padding: 6px 16px;
    margin-bottom: 12px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Options: React.SFC<Props> = ({ options }) => (
  <Wrapper>
    {options.map((option) => (
      <button key={option} type="button">{option}</button>
    ))}
  </Wrapper>
);

export default Options;
