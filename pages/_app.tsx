import '../styles/globals.scss';
import '../styles/theme.scss';
import '../styles/mixins.scss';

import type { AppProps } from 'next/app';
import DesktopContextProvider from '../context/DesktopContextProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DesktopContextProvider>
      <Component {...pageProps} />
    </DesktopContextProvider>
  );
}
