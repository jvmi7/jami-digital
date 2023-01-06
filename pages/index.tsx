import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';
import Desktop from '../components/Desktop/Desktop';
import Splash from '../components/Splash/Splash';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AnimatePresence mode='wait'>
        {showSplash ? (
          <Splash
            key='splash'
            onClick={() => {
              setShowSplash(false);
            }}
          />
        ) : (
          <Desktop key='desktop' />
        )}
      </AnimatePresence>
    </>
  );
}
