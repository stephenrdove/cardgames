import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      color: ${({ theme }) => theme.colors.text};
      font-family: Arial, Helvetica, sans-serif;
    }
  
    html,
    body,
    #__next {
      height: 100%;
      background: ${({ theme }) => theme.colors.background};
    }
  
    body,
    #__next {
      display: flex;
      flex-direction: column;
    }
`;

export default GlobalStyles;
