'use client';

import { IntroSection } from '@/app/charts/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/charts/components/SplashSection/SplashSection';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';

const ChartsPage = () => {
  return (
    <div>
      <Header theme="DARK" />
      <SplashSection />
      <IntroSection />
      <div style={{ height: '200px', width: '100%' }}>
        <div style={{ height: '100%', width: '100%', backgroundColor: 'red' }}></div>
      </div>
      <Footer showThemeToggle={false} backgroundColor="#000000" foregroundColor="#dddddd" />
    </div>
  );
};

export default ChartsPage;
