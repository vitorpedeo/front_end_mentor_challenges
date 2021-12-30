import type { AppProps } from 'next/app';
import Head from 'next/head';

import LocationProvider from '../contexts/LocationContext';

import { GlobalStyles } from '../styles/global';

import '@fontsource/rubik';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocationProvider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <title>Frontend Mentor | IP Address Tracker</title>
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </LocationProvider>
  );
}

export default MyApp;
