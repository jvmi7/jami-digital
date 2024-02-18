'use client';

import { PageStateProvider } from '../../swatches/page-state-context';
import SwatchesPage from '../../swatches/swatches';

const swatches = () => {
  return (
    <PageStateProvider>
      <SwatchesPage />
    </PageStateProvider>
  );
};

export default swatches;
