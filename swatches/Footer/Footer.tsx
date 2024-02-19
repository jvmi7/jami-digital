import { RiShareForwardFill, RiShuffleFill } from '@remixicon/react';
import Button from '../Button/Button';
import styles from './Footer.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { animate, exit, initial } from '../constants';
import { usePageState } from '../page-state-context';

const Footer = () => {
  const { currentPage, setCurrentPage } = usePageState();

  return (
    <div className={styles.container}>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button variant="secondary" isIcon>
          <RiShareForwardFill />
        </Button>
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {currentPage === 'home' || currentPage === 'mint' ? (
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
            >
              learn more
            </Button>
          </motion.div>
        ) : (
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
              go back
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button variant="secondary" isIcon>
          <RiShuffleFill />
        </Button>
      </motion.div>
    </div>
  );
};

export default Footer;
