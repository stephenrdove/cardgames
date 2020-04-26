import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import BodyContent from '../components/globals/BodyContent';
import Footer from '../components/globals/Footer';
import globalStyles from '../components/globals/globalStyles';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const Wrapper: React.FunctionComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head>
        <style>{globalStyles}</style>
      </Head>
      <BodyContent>
        {children}
        <button onClick={() => setIsDarkMode(!isDarkMode)} type="button">Test</button>
      </BodyContent>
      <Footer>This is a footer</Footer>
    </ThemeProvider>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
    );
  }
}
