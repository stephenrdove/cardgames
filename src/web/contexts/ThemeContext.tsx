import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { createHookContext } from './base';

import darkTheme from '../themes/dark';
import lightTheme from '../themes/light';

export const ThemeContext = createHookContext<boolean>(true);

export const ThemeContextProvider: React.SFC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
