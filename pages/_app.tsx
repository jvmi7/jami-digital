import '../styles/globals.scss';
import '../styles/theme.scss';
import '../styles/mixins.scss';

import type { AppProps } from 'next/app';
import DesktopContextProvider from '../context/DesktopContextProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@rainbow-me/rainbowkit/styles.css';
import { Analytics } from '@vercel/analytics/react';

import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  sepolia,
} from 'wagmi/chains';
import {
  darkTheme,
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { ThemeProvider } from '../context/ThemeContext';

const config = getDefaultConfig({
  appName: 'jvmi.art',
  projectId: '5b326acd6fa145bfb749703df5320415',
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
  ],
  ssr: true,
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DesktopContextProvider>
            <RainbowKitProvider modalSize="compact" theme={darkTheme()}>
              <Component {...pageProps} />
            </RainbowKitProvider>
          </DesktopContextProvider>
        </QueryClientProvider>
      </WagmiProvider>
      <Analytics />
    </ThemeProvider>
  );
}
