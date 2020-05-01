export type ColorGradiant = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export interface Colors {
  // red: ColorGradiant;
  // pink: ColorGradiant;
  // purple: ColorGradiant;
  // deepPurple: ColorGradiant;
  indigo: ColorGradiant;
  // blue: ColorGradiant;
  // lightBlue: ColorGradiant;
  // cyan: ColorGradiant;
  // teal: ColorGradiant;
  // green: ColorGradiant;
  // lightGreen: ColorGradiant;
  // lime: ColorGradiant;
  // yellow: ColorGradiant;
  // amber: ColorGradiant;
  // orange: ColorGradiant;
  // deepOrange: ColorGradiant;
  // brown: ColorGradiant;
  grey: ColorGradiant;
  // blueGrey: ColorGradiant;
}

const colors: Colors = {
  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
    800: '#283593',
    900: '#1a237e',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
};

export default colors;
