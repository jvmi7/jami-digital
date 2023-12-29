import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useMedia } from 'react-use';
import Desktop from '../components/Desktop/Desktop';
import Gameboy from '../components/Gameboy/Gameboy';
import Splash from '../components/Splash/Splash';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const isMobile = useMedia('(max-width: 900px)', false) || false;

  const [showSplash, setShowSplash] = useState(true);

  const { theme } = useTheme();

  useEffect(() => {
    if (isMobile) setShowSplash(false);
  }, []);

  return (
    <>
      <Head>
        <title>jvmi.art</title>
        <link rel='preload' href='/speakers.svg' as='image' />
        <link rel='preload' href='/dpad.svg' as='image' />
        <link rel='preload' href='/primaryButton.svg' as='image' />
        <link rel='preload' href='/secondaryButton.svg' as='image' />
        <link rel='preload' href='/arrow.svg' as='image' />
      </Head>
      <Div100vh style={{ overflow: 'hidden' }}>
        <AnimatePresence mode='wait'>
          {isMobile ? (
            <Gameboy />
          ) : showSplash ? (
            <Splash
              key='splash'
              onClick={() => {
                setShowSplash(false);
              }}
            />
          ) : (
            <Desktop />
          )}
        </AnimatePresence>
      </Div100vh>
    </>
  );
}
