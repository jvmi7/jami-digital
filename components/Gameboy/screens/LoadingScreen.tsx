import { motion } from 'framer-motion';

import styles from './LoadingScreen.module.scss';

function LoadingScreen() {
  const item = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.3 },
    },
    exit: {
      opacity: 0,
      scale: 0,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={item}
      className={styles.container}
    >
      <h1>
        <span>m</span>
        <span>a</span>
        <span>c</span>
        <span>h</span>
        <span>i</span> <span>m</span>
        <span>a</span>
        <span>r</span>
        <span>k</span>
        <span>e</span>
        <span>t</span>
        {/* <span>B</span>
        <span>O</span>
        <span>Y</span> */}
      </h1>
    </motion.div>
  );
}

export default LoadingScreen;
