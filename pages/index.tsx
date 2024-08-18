import Head from 'next/head';
import { useMedia } from 'react-use';
import { useTheme } from '../hooks/useTheme';
import { SplashSection } from '../home/SplashSection/SplashSection';
import { IntroSection } from '../home/IntroSection/IntroSection';
import styles from './index.module.scss';
import { Header } from '../components/HomePage/Header/Header';
import { Element } from 'react-scroll';
import { ProjectSection } from '../home/ProjectSection/ProjectSection';
import {
  ChartsProjectMetadata,
  SwatchesProjectMetadata,
} from '../home/constants';
import { GallerySection } from '../home/GallerySection/GallerySection';
import { PressSection } from '../home/PressSection/PressSection';
import { FooterSection } from '../home/FooterSection/FooterSection';
import { SectionIndicator } from '../home/SectionIndicator/SectionIndicator';
import { InView } from 'react-intersection-observer';
import { useState } from 'react';

export default function Home() {
  const inViewThreshold = 0.3;
  const [sectionIndex, setSectionIndex] = useState(0);
  console.log('sectionIndex', sectionIndex);

  return (
    <>
      <Head>
        <title>jvmi.art</title>
        <link rel="preload" href="/speakers.svg" as="image" />
        <link rel="preload" href="/dpad.svg" as="image" />
        <link rel="preload" href="/primaryButton.svg" as="image" />
        <link rel="preload" href="/secondaryButton.svg" as="image" />
        <link rel="preload" href="/arrow.svg" as="image" />
      </Head>

      <div className={styles.body}>
        <Header />
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
          <Element name="charts" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(2);
            }}
            threshold={inViewThreshold}
            className={styles.section}
          >
            <ProjectSection metadata={ChartsProjectMetadata} />
          </InView>
          <Element name="gallery" />
          <InView
            onChange={inView => {
              if (inView) setSectionIndex(3);
            }}
            threshold={0.3}
            className={styles.section}
          >
            <GallerySection />
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
          <FooterSection />
        </div>
      </div>
    </>
  );
}
