import {
  useState,
  createContext,
  useReducer,
  Dispatch,
} from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import { createHookContext } from './base';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

type ThemeState = {
  theme: DefaultTheme;
};

type ThemeAction =
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_DARK' }
  | { type: 'SET_LIGHT' };

const initialState: ThemeState = { theme: darkTheme };

type ThemeContextType = { state: ThemeState; dispatch: Dispatch<ThemeAction> };

export const NewThemeContext = createContext<ThemeContextType>({
  state: initialState,
  dispatch: () => { },
});

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { theme: (state.theme === darkTheme ? lightTheme : darkTheme) };
    case 'SET_LIGHT':
      return { theme: lightTheme };
    case 'SET_DARK':
    default:
      return { theme: darkTheme };
  }
}

export const NewThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <NewThemeContext.Provider value={{ state, dispatch }}>
      <ThemeProvider theme={state.theme}>
        {children}
      </ThemeProvider>
    </NewThemeContext.Provider>
  );
};

export const ThemeContext = createHookContext<boolean>(true);

export const ThemeContextProvider: React.SFC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
