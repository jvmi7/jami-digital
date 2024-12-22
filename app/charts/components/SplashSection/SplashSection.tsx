import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import styles from '@/app/charts/components/SplashSection/SplashSection.module.scss';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { socialLinks } from '@/constants';
import { AnimatedScrollIcon } from '@/icons/AnimatedScrollIcon';
import { animate, initial, pageVariants } from '@/swatches/constants';

const ChartsPreview = ({ showScrollIcon }: { showScrollIcon: boolean }) => {
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
      <motion.div
        initial={initial}
        animate={{
          ...animate,
          opacity: showScrollIcon ? 1 : 0,
          transition: { delay: showScrollIcon ? 1 : 0 },
        }}
        transition={{ duration: 0.2 }}
      >
        <p className={styles.title}>charts</p>
      </motion.div>
    </motion.div>
  );
};

const MintButton = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <Button variant="primary" href={socialLinks.x}>
      {isMobile ? <span>soon</span> : <span>coming soon</span>}
    </Button>
  );
};

const SplashSection = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showScrollIcon, setShowScrollIcon] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < 690);
  }, [width]);

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
      <Header theme="DARK" button={<MintButton isMobile={isMobile} />} transitionDelay={1} />
      <div className={styles.content}>
        <ChartsPreview showScrollIcon={showScrollIcon} />
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
