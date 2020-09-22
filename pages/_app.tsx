import { AppProps } from 'next/app';
import { Provider } from 'jotai';

import '~/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
