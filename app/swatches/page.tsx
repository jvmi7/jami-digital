'use client';

import { Footer } from '@/components/Footer/Footer';
import { PageStateProvider } from '@/swatches/page-state-context';
import SwatchesPage from '@/swatches/swatches';

const swatches = () => {
  return (
    <PageStateProvider>
      <SwatchesPage />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </PageStateProvider>
  );
};

export default swatches;
