'use client';

import styles from '@/app/swatches/page.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { CollectionPreview } from '@/swatches/CollectionPreview/CollectionPreview';
import { FaqSection } from '@/swatches/FaqSection/FaqSection';
import { IntroSection } from '@/swatches/IntroSection';
import { PageStateProvider } from '@/swatches/page-state-context';
import { SwatchesPage } from '@/swatches/SwatchesPage';

const SwatchesClient = () => {
  return (
    <PageStateProvider>
      <div className={styles.container}>
        <SwatchesPage />
        <div className={styles.introContainer}>
          <IntroSection />
        </div>
        <CollectionPreview />
        <FaqSection />
        <Footer
          showThemeToggle={false}
          backgroundColor="#eeeeee"
          foregroundColor="var(--swatches-text-color)"
        />
      </div>
    </PageStateProvider>
  );
};

export { SwatchesClient };
