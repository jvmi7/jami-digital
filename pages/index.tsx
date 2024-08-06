import Head from 'next/head';
import { useMedia } from 'react-use';
import { useTheme } from '../hooks/useTheme';
import { SplashSection } from '../home/SplashSection/SplashSection';
import { IntroSection } from '../home/IntroSection/IntroSection';
import styles from './index.module.scss';
import { Header } from '../components/HomePage/Header/Header';

export default function Home() {
  const isMobile = useMedia('(max-width: 100000px)', false) || false;

  const { theme } = useTheme();

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
        <IntroSection />
      </div>
    </>
  );
}
