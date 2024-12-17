import { Metadata } from 'next';
import { SwatchesClient } from '@/swatches/index';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: 'https://jvmi.art/swatches',
    title: 'swatches: interactive generative nfts',
    description: 'the exploration of color, motion & human interaction',
    images: [
      {
        url: 'https://jvmi.art/swatches-meta-banner.jpg?123',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jvmi_',
    title: 'swatches: interactive generative nfts',
    description: 'the exploration of color, motion & human interaction',
    images: ['https://jvmi.art/swatches-meta-banner.jpg?123'],
  },
};

export default function Page() {
  return <SwatchesClient />;
}
