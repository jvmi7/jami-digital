import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useMedia } from 'react-use';
import Desktop from '../components/Desktop/Desktop';
import Gameboy from '../components/Gameboy/Gameboy';
import Splash from '../components/Splash/Splash';
import { useTheme } from '../hooks/useTheme';
import { SplashSection } from './home/SplashSection';

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

      <SplashSection />
    </>
  );
}
