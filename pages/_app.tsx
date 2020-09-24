import { AppProps } from 'next/app';
import { Provider } from 'jotai';
import Header from '~/components/Header';

import '~/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
