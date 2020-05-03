import { DefaultTheme } from 'styled-components';
import colors from './colors';
import clamp from '../utils/clamp';

const light: DefaultTheme = {
  colors: {
    ...colors,
    text: colors.grey[900],
    background: colors.grey[100],
    backgroundContrast: colors.grey[300],
    backgroundColor: (layer) => colors.grey[clamp(layer * 100, 50, 900)],
    backgroundOverlay: 'rgba(0, 0, 0, 0.04)',
    primary: colors.indigo[500],
    secondary: '',
    danger: 'red',
    white: '#ffffff',
    black: '#000000',
  },

  header: {
    height: 65,
    backgroundColor: colors.indigo[500],
    textColor: colors.grey[100],
  },

  footer: {
    backgroundColor: colors.indigo[500],
    textColor: colors.grey[100],
  },
};

export default light;
