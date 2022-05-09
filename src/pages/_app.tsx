import React from 'react';
import { ToastContainer } from 'react-toastify';

import Head from 'next/head';

import { CloseButton } from 'components/CustomTostfy/CloseButton';
import { LoaderProvider } from 'contexts/loaderContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

import 'react-toastify/dist/ReactToastify.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Teste Tecnico Tiinova</title>
      </Head>

      <LoaderProvider>
        <GlobalStyle />
        <Component {...pageProps} />
        <ToastContainer
          toastClassName="toastifyContainer"
          hideProgressBar
          autoClose={5000}
          closeButton={CloseButton}
        />
      </LoaderProvider>
    </ThemeProvider>
  );
}
