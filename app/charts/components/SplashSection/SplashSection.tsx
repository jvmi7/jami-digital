'use client';

import { RiArrowDownLine } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

import styles from '@/app/charts/components/SplashSection/SplashSection.module.scss';
import { scrollElement } from '@/app/charts/constants';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { AnimatedScrollIcon } from '@/icons/AnimatedScrollIcon';
import { pageVariants } from '@/swatches/constants';

const ChartsPreview = () => {
  const url =
    'https://charts-by-jvmi-jet.vercel.app/?values=[13,26,39,52,65,78,91]&palette=classic';

  return (
    <motion.div
      className={styles.iframe}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <iframe src={url} className={styles.container} title="Charts Preview" />
    </motion.div>
  );
};

const MintButton = ({ showScrollIcon }: { showScrollIcon: boolean }) => {
  const [offset, setOffset] = useState(-window.innerHeight + 48);

  useEffect(() => {
    const updateOffset = () => {
      setOffset(-window.innerHeight + 48);
    };

    // Update offset on resize and orientation change
    window.addEventListener('resize', updateOffset);
    window.addEventListener('orientationchange', updateOffset);

    return () => {
      window.removeEventListener('resize', updateOffset);
      window.removeEventListener('orientationchange', updateOffset);
    };
  }, []);

  if (!showScrollIcon) return null;
  return (
    <Link to={scrollElement} smooth={true} duration={500} offset={offset}>
      <Button variant="primary" className={styles.mintButton} isIcon>
        <RiArrowDownLine size={20} />
      </Button>
    </Link>
  );
};

const SplashSection = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowScrollIcon(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Header
        theme="DARK"
        button={<MintButton showScrollIcon={showScrollIcon} />}
        transitionDelay={1}
      />
      <div className={styles.content}>
        <ChartsPreview />
      </div>

      <AnimatePresence>
        {showScrollIcon && (
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.5 } }}
          >
            <div className={styles.scrollIcon}>
              <AnimatedScrollIcon size={48} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { SplashSection };
