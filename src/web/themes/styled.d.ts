import 'styled-components';
import { Colors } from './colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors & {
      backgroundColor: (layer: number) => string;
      backgroundOverlay: string;
      text: string;
      background: string;
      backgroundContrast: string;
      primary: string;
      secondary: string;
      danger: string;
      white: string;
      black: string;
    };

    header: {
      height: number;
      backgroundColor: string;
      textColor: string;
    };

    footer: {
      backgroundColor: string;
      textColor: string;
    };

    buttons: {
      primary: string;
      secondary: string;
      text: string;
    };

    card: {
      red: string;
      black: string;
    };
  }
}
