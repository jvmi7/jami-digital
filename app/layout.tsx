import { Analytics } from '@vercel/analytics/react';
import '@rainbow-me/rainbowkit/styles.css';
import '@/styles/globals.scss';
import '@/styles/theme.scss';
import '@/styles/mixins.scss';

import { Providers } from '@/app/providers';

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
