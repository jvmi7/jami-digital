'use client';

import ImageGrid from '@/app/charts/components/InformationSection/ImageGrid';
import InformationSection from '@/app/charts/components/InformationSection/InformationSection';
import TimeImage from '@/app/charts/components/InformationSection/TimeImage';
import { IntroSection } from '@/app/charts/components/IntroSection/IntroSection';
import { SplashSection } from '@/app/charts/components/SplashSection/SplashSection';
import { Footer } from '@/components/Footer/Footer';

const ChartsPage = () => {
  return (
    <div>
      <SplashSection />
      <IntroSection />
      <InformationSection
        title="randomness creates art"
        description="each chart is a unique composition of 7 random numbers stored onchain"
      >
        <ImageGrid variant="classic" />
      </InformationSection>
      <InformationSection
        variant="right"
        title="time-based reveal"
        description="watch your nft reveal a new value each day until completed"
      >
        <TimeImage />
      </InformationSection>
      <InformationSection
        title="burn to evolve"
        description="once revealed, charts can be burned to unlock increasingly rare palettes"
      >
        <ImageGrid variant="classic" />
      </InformationSection>
      <InformationSection
        variant="right"
        title="perfection by chance"
        description="each burn has the possibility of additionally receiving one of twelve “perfect” chart patterns"
      >
        <ImageGrid variant="perfection" />
      </InformationSection>
      <Footer showThemeToggle={false} backgroundColor="#000000" foregroundColor="#dddddd" />
    </div>
  );
};

export default ChartsPage;
