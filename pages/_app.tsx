import '../styles/globals.scss';
import '../styles/theme.scss';
import '../styles/mixins.scss';

import type { AppProps } from 'next/app';
import DesktopContextProvider from '../context/DesktopContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <DesktopContextProvider>
        <Component {...pageProps} />
      </DesktopContextProvider>
    </QueryClientProvider>
  );
}
