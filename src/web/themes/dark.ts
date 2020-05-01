import { DefaultTheme } from 'styled-components';
import colors from './colors';
import clamp from '../utils/clamp';

const light: DefaultTheme = {
  colors: {
    ...colors,
    text: colors.grey[100],
    background: colors.grey[900],
    backgroundContrast: colors.grey[700],
    backgroundColor: (layer) => colors.grey[clamp(900 - layer * 100, 50, 900)],
    backgroundOverlay: 'rgba(255, 255, 255, 0.08)',
    primary: colors.indigo[500],
    secondary: '',
    white: '#ffffff',
    black: '#000000',
  },

  header: {
    height: 65,
    backgroundColor: '#333',
    textColor: colors.grey[100],
  },

  footer: {
    backgroundColor: '#333',
    textColor: colors.grey[100],
  },
};

export default light;
