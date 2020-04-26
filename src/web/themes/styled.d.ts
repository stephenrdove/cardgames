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
    };

    header: {
      height: number;
      backgroundColor: string;
    };
  }
}
