import { RiQuestionMark, RiShuffleFill } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';

import { OpenSeaIcon } from '@/icons/OpenSeaIcon';
import Button from '@/components/Button/Button';
import { TOTAL_SWATCHES, animate, exit, initial } from '@/swatches/constants';
import styles from '@/swatches/Footer/Footer.module.scss';
import { usePageState } from '@/swatches/page-state-context';

const Footer = () => {
  const { currentPage, setCurrentPage, setSwatchIndex } = usePageState();
  const handleShuffle = () => {
    const randomNumber = Math.floor(Math.random() * TOTAL_SWATCHES) + 1; // Generates a random number between 1 and 2000
    setSwatchIndex(randomNumber);
  };

  return (
    <div className={styles.container}>
      <AnimatePresence exitBeforeEnter>
        {currentPage === 'home' ? (
          <>
            <motion.div
              key="learn"
              initial={initial}
              animate={{
                ...animate,
                transition: currentPage !== 'home' ? { delay: 0 } : { delay: 1 },
              }}
              exit={exit}
            >
              <Button
                variant="secondary"
                onClick={() => {
                  setCurrentPage('learn');
                }}
                isIcon
              >
                <RiQuestionMark />
              </Button>
            </motion.div>
            <motion.div initial={initial} animate={animate} exit={exit}>
              <Button variant="secondary" isIcon onClick={handleShuffle}>
                <RiShuffleFill />
              </Button>
            </motion.div>
            <motion.div initial={initial} animate={animate} exit={exit}>
              <Button
                variant="secondary"
                isIcon
                onClick={() => {
                  window.open('https://opensea.io/collection/swatches-by-jvmi', '_blank');
                }}
              >
                <OpenSeaIcon />
              </Button>
            </motion.div>
          </>
        ) : currentPage === 'learn' ? (
          <motion.div
            key="back"
            initial={initial}
            animate={{ ...animate, transition: { delay: 0 } }}
            exit={exit}
          >
            <Button
              variant="secondary"
              onClick={() => {
                setCurrentPage('home');
              }}
            >
              exit
            </Button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Footer;
