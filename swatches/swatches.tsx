import { useEffect } from 'react';
import styles from './swatches.module.scss';
import Header from './Header/Header';
import { useWindowSize } from 'react-use';
import Footer from './Footer/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { animate, initial, pageVariants } from './constants';
import { PageStateProvider, usePageState } from './page-state-context';
import LearnMore from './LearnMore/LearnMore';
import { Mint } from './Mint/Mint';
import Head from 'next/head';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const SwatchesPage = () => {
  const { currentPage, swatchIndex } = usePageState();

  useEffect(() => {
    // Store the original body background colo
    const originalBackgroundColor =
      document.documentElement.style.backgroundColor;

    // Set the new background color when the component mounts
    document.documentElement.style.backgroundColor =
      'var(--swatches-background-color)'; // Replace '#yourDesiredColor' with your chosen color

    // Reset to the original background color when the component unmounts
    return () => {
      document.documentElement.style.backgroundColor = originalBackgroundColor;
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jvmi.art/swatches" />
        <meta
          property="og:title"
          content="swatches: interactive generative nfts"
        />
        <meta
          property="og:description"
          content="the exploration of color, motion & human interaction"
        />
        <meta
          property="og:image"
          content="https://jvmi.art/swatches-meta-banner.jpg?123"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jvmi_" />
        <meta name="twitter:url" content="https://jvmi.art/swatches" />
        <meta
          name="twitter:title"
          content="swatches: interactive generative nfts"
        />
        <meta
          name="twitter:description"
          content="the exploration of color, motion & human interaction"
        />
        <meta
          name="twitter:image"
          content="https://jvmi.art/swatches-meta-banner.jpg?123"
        />
      </Head>
      <div className={styles.container}>
        <Header />

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
          ) : currentPage === 'mint' ? (
            <motion.div
              key="mint"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className={styles.content}
            >
              <Mint />
            </motion.div>
          ) : null}
        </AnimatePresence>
        <Footer />
      </div>
    </>
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

export default SwatchesPage;
