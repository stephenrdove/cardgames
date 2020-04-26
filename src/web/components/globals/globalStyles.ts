import { css } from 'styled-components';

const globalStyles = css`
  * {
    margin: 0;
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body,
  #__next {
    display: flex;
    flex-direction: column;
  }
`;

export default globalStyles;