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

export default function Home() {
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
          <Element name="intro" />
          <IntroSection />
          <ProjectSection metadata={SwatchesProjectMetadata} />
          <ProjectSection metadata={ChartsProjectMetadata} />
          <GallerySection />
          <PressSection />
          <FooterSection />
        </div>
      </div>
    </>
  );
}
