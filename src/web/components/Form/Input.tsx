import styled, { css } from 'styled-components';

type Props = {
  hasError: boolean;
};

const minBorderWidth = 1;
const maxBorderWidth = 2;

export const Input = styled.input`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  background-color: transparent;
  border: none;
  border-bottom: ${minBorderWidth}px solid ${(props) => props.theme.colors.text};
  border-radius: 0;
  margin-bottom: ${maxBorderWidth - minBorderWidth}px; /* Account for growing/shrinking borders */
  padding: 5px 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.primary};
    border-bottom-width: ${maxBorderWidth}px;
    margin-bottom: 0;
  }

  ${(p: Props) => p.hasError && css`
    border-bottom-color: ${(props) => props.theme.colors.primary};
    border-bottom-width: ${maxBorderWidth}px;
    margin-bottom: 0;
  `}
`;

export default Input;
