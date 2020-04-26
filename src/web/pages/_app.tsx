import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import lightTheme from '../themes/light';

import Container from '../components/Container';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={lightTheme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
