import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Header from '~/components/Header';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=4, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
