'use client';

import { Footer } from '@/components/Footer/Footer';
import { IntroSection } from '@/app/swatchpepen/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/swatchpepen/components/SplashSection/SplashSection';
import styles from '@/app/swatchpepen/page.module.scss';
const SwatchPepen = () => {
  return (
    <div className={styles.container}>
      <SplashSection />
      <IntroSection />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </div>
  );
};

export default SwatchPepen;
