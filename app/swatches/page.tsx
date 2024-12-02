'use client';

import { FaqContainer } from '@/components/FaqContainer/FaqContainer';
import { Footer } from '@/components/Footer/Footer';
import { PageStateProvider } from '@/swatches/page-state-context';
import SwatchesPage from '@/swatches/swatches';

const swatches = () => {
  const faqs = [
    {
      question: 'what is a swatch?',
      answers: ['a swatch is a small piece of fabric'],
    },
  ];

  return (
    <PageStateProvider>
      <SwatchesPage />
      <FaqContainer faqs={faqs} />
      <Footer
        showThemeToggle={false}
        backgroundColor="#eeeeee"
        foregroundColor="var(--swatches-text-color)"
      />
    </PageStateProvider>
  );
};

export default swatches;
