import React from 'react';
import { QueryClientProvider } from 'react-query';

import Head from 'next/head';

import { queryClient } from 'services/reactQuery/queryClient';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'styles/global';
import { theme } from 'styles/theme';

export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Teste Tecnico Tiinova</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
