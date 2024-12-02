'use client';

import { CollectionPreview } from '@/app/swatchpepen/components/CollectionPreview/CollectionPreview';
import { IntroSection } from '@/app/swatchpepen/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/swatchpepen/components/SplashSection/SplashSection';
import styles from '@/app/swatchpepen/page.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { FaqSection } from './components/FaqSection/FaqSection';

const SwatchPepen = () => {
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
};

export default SwatchPepen;
