import { DefaultTheme } from 'styled-components';
import colors from './colors';

const light: DefaultTheme = {
  colors: {
    ...colors,
    background: colors.grey[100],
    primary: '#5E81AC',
    secondary: '',
  },
};

export default light;
