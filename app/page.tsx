import { HomeClient } from '@/home';

export const metadata = {
  openGraph: {
    type: 'website',
    url: 'https://jvmi.art',
    title: 'jvmi.art',
    description: 'interactive art onchain',
    images: [
      {
        url: 'https://jvmi.art/jvmi-art-banner.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jvmi_',
    title: 'jvmi.art',
    description: 'interactive art onchain',
    images: ['https://jvmi.art/jvmi-art-banner-twitter.png'],
  },
};

export default function Home() {
  return <HomeClient />;
}
