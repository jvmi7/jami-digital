import { RiShareForwardFill, RiShuffleFill } from '@remixicon/react';
import Button from '../Button/Button';
import styles from './Footer.module.scss';
import { motion } from 'framer-motion';
import { animate, exit, initial } from '../constants';
import { usePageState } from '../page-state-context';

const Footer = () => {
  const { setCurrentPage } = usePageState();

  return (
    <div className={styles.container}>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button variant="secondary" isIcon>
          <RiShareForwardFill />
        </Button>
      </motion.div>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button
          variant="secondary"
          onClick={() => {
            setCurrentPage('learn');
          }}
        >
          learn more
        </Button>
      </motion.div>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button variant="secondary" isIcon>
          <RiShuffleFill />
        </Button>
      </motion.div>
    </div>
  );
};

export default Footer;
