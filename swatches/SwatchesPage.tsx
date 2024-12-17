import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useEffect } from 'react';

import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton';
import { Header } from '@/components/Header/Header';
import { animate, initial, pageVariants } from '@/swatches/constants';
import Footer from '@/swatches/Footer/Footer';
import LearnMore from '@/swatches/LearnMore/LearnMore';
import { usePageState } from '@/swatches/page-state-context';
import styles from '@/swatches/swatches.module.scss';

const SwatchesPage = () => {
  const { currentPage, swatchIndex } = usePageState();

  useEffect(() => {
    // Store the original body background colo
    const originalBackgroundColor = document.documentElement.style.backgroundColor;

    // Set the new background color when the component mounts
    document.documentElement.style.backgroundColor = 'var(--swatches-background-color)'; // Replace '#yourDesiredColor' with your chosen color

    // Reset to the original background color when the component unmounts
    return () => {
      document.documentElement.style.backgroundColor = originalBackgroundColor;
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div className={styles.container}>
      <Header
        backgroundColor="#eeeeee"
        foregroundColor="currentColor"
        theme="LIGHT"
        button={<ConnectWalletButton />}
        transitionDelay={1}
      />

      <AnimatePresence exitBeforeEnter>
        {currentPage === 'home' ? (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.content}
          >
            <SwatchPreview swatchIndex={swatchIndex} />
          </motion.div>
        ) : currentPage === 'learn' ? (
          <motion.div
            key="learn"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className={styles.content}
          >
            <LearnMore />
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

const SwatchPreview = ({ swatchIndex }: { swatchIndex: number }) => {
  return (
    <div className={styles.iframe}>
      <iframe
        src={`https://www.swatches-animation-url.art/items/${swatchIndex}/`}
        className={styles.container}
      />
      <motion.div initial={initial} animate={animate}>
        <p className={styles.title}>swatches</p>
      </motion.div>
    </div>
  );
};

export { SwatchesPage };
