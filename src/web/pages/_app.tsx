import React, { useState } from 'react';
import App from 'next/app';
import Head from 'next/head';
import styled, { ThemeProvider } from 'styled-components';

import HeaderWrapper from '../components/globals/Header';
import BodyContent from '../components/globals/BodyContent';
import Footer from '../components/globals/Footer';
import globalStyles from '../components/globals/globalStyles';
import Toggle from '../components/Toggle';

import lightTheme from '../themes/light';
import darkTheme from '../themes/dark';

const StyleToggleWrapper = styled.div`
  position: fixed;
  top: 16px;
  right: 16px;
`;

const Wrapper: React.FunctionComponent = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Head>
        <style>{globalStyles}</style>
      </Head>
      <HeaderWrapper>Bus.Cards</HeaderWrapper>
      <BodyContent>
        {children}
        <StyleToggleWrapper>
          <Toggle value={isDarkMode} onChange={setIsDarkMode} />
        </StyleToggleWrapper>
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
