import App, { AppContext, AppProps } from 'next/app';
import { ChakraProvider, createCookieStorageManager } from '@chakra-ui/react';
import Head from 'next/head';
import { StrictMode } from 'react';
import { baseTheme } from '@lib/themes';
import { cookieStorage } from '@lib/cookies';

import { StoreProvider } from '@stores/core';

import '../styles/global.scss';

const MyApp = (context: AppProps & { cookies: string; state: string }) => {
  const { Component, pageProps, cookies, state } = context;
  const manager = createCookieStorageManager('theme', cookies);
  return (
    <StrictMode>
      <StoreProvider cookies={{ ...JSON.parse(state) }}>
        <ChakraProvider theme={baseTheme} colorModeManager={manager}>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            {/* <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta> */}
          </Head>
          <Component {...pageProps} />
        </ChakraProvider>
      </StoreProvider>
    </StrictMode>
  );
};

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  const { req } = context.ctx;
  const state = cookieStorage.getCookies({ context: context.ctx });
  return {
    ...appProps,
    cookies: req?.headers.cookie ?? '',
    state: JSON.stringify(state),
  };
};

export default MyApp;
