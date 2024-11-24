import { Analytics } from '@vercel/analytics/react';
import '@rainbow-me/rainbowkit/styles.css';
import '@/styles/globals.scss';
import '@/styles/theme.scss';
import '@/styles/mixins.scss';

import { Providers } from '@/app/providers';

export const metadata = {
  metadataBase: new URL('https://jvmi.art'),
  title: 'jvmi.art',
  description: 'interactive art onchain',
  openGraph: {
    type: 'website',
    url: 'https://jvmi.art',
    title: 'jvmi.art',
    description: 'interactive art onchain',
    images: ['/jvmi-art-banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jvmi_',
    title: 'jvmi.art',
    description: 'interactive art onchain',
    images: ['/jvmi-art-banner-twitter.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
