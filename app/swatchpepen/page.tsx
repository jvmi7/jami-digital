'use client';

import { IntroSection } from '@/app/swatchpepen/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/swatchpepen/components/SplashSection/SplashSection';
import styles from '@/app/swatchpepen/page.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { CollectionPreview } from './components/CollectionPreview/CollectionPreview';
const SwatchPepen = () => {
  return (
    <div className={styles.container}>
      <SplashSection />
      <IntroSection />
      <CollectionPreview />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </div>
  );
};

export default SwatchPepen;
