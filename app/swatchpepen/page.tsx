import { Metadata } from 'next';

import { SwatchPepenClient } from '@/app/swatchpepen/SwatchpepenClient';
s;

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: 'https://jvmi.art/swatchpepen',
    title: 'swatchpepen',
    description: 'swatchpepen',
    images: [
      {
        url: 'https://jvmi.art/swatchpepen-banner.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jvmi_',
    title: 'swatchpepen',
    description: 'swatchpepen',
    images: ['https://jvmi.art/swatchpepen-banner-twitter.png'],
  },
};

export default function SwatchPepen() {
  return <SwatchPepenClient />;
}
