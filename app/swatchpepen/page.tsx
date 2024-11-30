'use client';

import SwatchPepenPage from '@/app/swatchpepen/components/SwatchpepenPage/SwatchpepenPage';
import { Footer } from '@/components/Footer/Footer';

const SwatchPepen = () => {
  return (
    <>
      <SwatchPepenPage />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </>
  );
};

export default SwatchPepen;
