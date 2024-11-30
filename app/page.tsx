'use client';

import Head from 'next/head';
import { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Element } from 'react-scroll';

import styles from '@/app/index.module.scss';
import { Footer } from '@/components/Footer/Footer';
import { Header } from '@/components/Header/Header';
import { ChartsProjectMetadata, SwatchesProjectMetadata } from '@/home/constants';
import { GallerySection } from '@/home/GallerySection/GallerySection';
import { IntroSection } from '@/home/IntroSection/IntroSection';
import { PressSection } from '@/home/PressSection/PressSection';
import { ProjectSection } from '@/home/ProjectSection/ProjectSection';
import { SectionIndicator } from '@/home/SectionIndicator/SectionIndicator';
import { SplashSection } from '@/home/SplashSection/SplashSection';

export default function Home() {
  const inViewThreshold = 0.3;
  const [sectionIndex, setSectionIndex] = useState(0);

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jvmi.art" />
        <meta property="og:title" content="jvmi.art" />
        <meta property="og:description" content="interactive art onchain" />
        <meta property="og:image" content="https://jvmi.art/jvmi-art-banner.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jvmi_" />
        <meta name="twitter:url" content="https://jvmi.art" />
        <meta name="twitter:title" content="jvmi.art" />
        <meta name="twitter:description" content="interactive art onchain" />
        <meta name="twitter:image" content="https://jvmi.art/jvmi-art-banner-twitter.png" />
      </Head>

      <div className={styles.body}>
        <Header />
        <Element name="splash" />
        <SplashSection />
        <div className={styles.page}>
          <SectionIndicator sectionIndex={sectionIndex} />
          <Element name="intro" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(0);
            }}
            threshold={inViewThreshold}
            className={styles.section}
          >
            <IntroSection />
          </InView>
          <Element name="swatches" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(1);
            }}
            threshold={inViewThreshold}
            className={styles.section}
          >
            <ProjectSection metadata={SwatchesProjectMetadata} />
          </InView>
          <div className={styles.spacerContainer}>
            <div className={styles.spacer} />
          </div>
          <Element name="gallery" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(2);
            }}
            threshold={0.3}
            className={styles.section}
          >
            <GallerySection />
          </InView>
          <Element name="charts" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(3);
            }}
            threshold={inViewThreshold}
            className={styles.section}
          >
            <ProjectSection metadata={ChartsProjectMetadata} />
          </InView>
          <Element name="press" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(4);
            }}
            threshold={inViewThreshold}
            className={styles.section}
          >
            <PressSection />
          </InView>
          <Footer showThemeToggle={false} />
        </div>
      </div>
    </>
  );
}
