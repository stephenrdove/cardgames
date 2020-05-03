import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { NewThemeContextProvider } from '../contexts/ThemeContext';
import GlobalStyles from '../components/globals/GlobalStyles';

import Header from '../components/globals/Header';
import BodyContent from '../components/globals/BodyContent';
import Footer from '../components/globals/Footer';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <NewThemeContextProvider>
        <Head>
          <title>Ride the Bus</title>
          <meta property="og:title" content="Ride the Bus" key="og:title" />
        </Head>
        <GlobalStyles />
        <Header />
        <BodyContent>
          <Component {...pageProps} />
        </BodyContent>
        <Footer>This is a footer</Footer>
      </NewThemeContextProvider>
    );
    // return (
    //   <ThemeContextProvider>
    //     <GlobalStyles />
    //     <Header />
    //     <BodyContent>
    //       <Component {...pageProps} />
    //     </BodyContent>
    //     <Footer>This is a footer</Footer>
    //   </ThemeContextProvider>
    // );
  }
}
