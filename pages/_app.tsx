import Head from 'next/head';
import { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Header from '~/components/Header';

import '~/styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
