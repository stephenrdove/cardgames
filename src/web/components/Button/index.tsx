import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  padding: 6px 16px;
  border-radius: 4px;
  border-style: none;
  line-height: 24px;
  text-transform: uppercase;
`;

export default Button;
