import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import { useMedia } from 'react-use';
import Desktop from '../components/Desktop/Desktop';
import Gameboy from '../components/Gameboy/Gameboy';
import Splash from '../components/Splash/Splash';
import styles from './index.module.scss';
import css from 'styled-jsx/css';
import { useTheme } from '../hooks/useTheme';

export default function Home() {
  const styles = css`
    body {
      &.LIGHT {
        --primary-color: $black;
        --secondary-color: $white;
      }

      &.DARK {
        --primary-color: $white;
        --secondary-color: $black;
      }
    }
  `;

  const [showSplash, setShowSplash] = useState(true);

  const isMobile = useMedia('(max-width: 600px)') || false;
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <style jsx>{styles}</style>
      <AnimatePresence mode='wait'>
        {showSplash ? (
          <Splash
            key='splash'
            onClick={() => {
              setShowSplash(false);
            }}
          />
        ) : isMobile ? (
          <div>
            <Gameboy />
          </div>
        ) : (
          <Desktop key='desktop' />
        )}
      </AnimatePresence>
    </>
  );
}
