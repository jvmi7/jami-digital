'use client';

import { IntroSection } from '@/app/charts/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/charts/components/SplashSection/SplashSection';
import { Footer } from '@/components/Footer/Footer';

const ChartsPage = () => {
  return (
    <div>
      <SplashSection />
      <IntroSection />
      <Footer showThemeToggle={false} backgroundColor="#000000" foregroundColor="#dddddd" />
    </div>
  );
};

export default ChartsPage;
