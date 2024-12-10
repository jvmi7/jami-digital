'use client';

import Head from 'next/head';

import { CollectionPreview } from '@/app/swatchpepen/components/CollectionPreview/CollectionPreview';
import { FaqSection } from '@/app/swatchpepen/components/FaqSection/FaqSection';
import { IntroSection } from '@/app/swatchpepen/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/swatchpepen/components/SplashSection/SplashSection';
import styles from '@/app/swatchpepen/page.module.scss';
import { Footer } from '@/components/Footer/Footer';

const SwatchPepen = () => {
  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jvmi.art/swatchpepen" />
        <meta property="og:title" content="swatchpepen" />
        <meta property="og:description" content="swatchpepen" />
        <meta property="og:image" content="https://jvmi.art/swatchpepen-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jvmi_" />
        <meta name="twitter:url" content="https://jvmi.art/swatchpepen" />
        <meta name="twitter:title" content="swatchpepen" />
        <meta name="twitter:description" content="swatchpepen" />
        <meta name="twitter:image" content="https://jvmi.art/swatchpepen-banner-twitter.png" />
      </Head>

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
    </>
  );
};

export default SwatchPepen;
