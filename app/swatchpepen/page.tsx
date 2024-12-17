import { Metadata } from 'next';

import { CollectionPreview } from '@/app/swatchpepen/components/CollectionPreview/CollectionPreview';
import { FaqSection } from '@/app/swatchpepen/components/FaqSection/FaqSection';
import { IntroSection } from '@/app/swatchpepen/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/swatchpepen/components/SplashSection/SplashSection';
import styles from '@/app/swatchpepen/page.module.scss';
import { Footer } from '@/components/Footer/Footer';

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
  return (
    <div className={styles.container}>
      <SplashSection />
      <IntroSection />
      <CollectionPreview />
      <FaqSection />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </div>
  );
}
