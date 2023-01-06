import React, { useRef } from 'react';
import styles from './Splash.module.scss';
import classNames from 'classnames';
import CurvedBorder from '../CurvedBorder';
import JamiLogo from '../JamiLogo';
import { motion, useDragControls } from 'framer-motion';
import AnimatedPalette from './AnimatedPalette';

interface Props {
  onClick?: () => void;
}
function Splash({ onClick }: Props) {
  const logo = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } }
  };

  const container = {
    hidden: { opacity: 0, scale: 0.6, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring', delay: 3.4 } }
  };

  const prompt = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, type: 'spring', delay: 2 } }
  };

  const borders = (
    <div className={styles.borderContainer}>
      <motion.div variants={container} initial='hidden' animate='visible' className={classNames(styles.border, styles.topRight)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' className={classNames(styles.border, styles.topLeft)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' className={classNames(styles.border, styles.bottomRight)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' className={classNames(styles.border, styles.bottomLeft)}>
        <CurvedBorder />
      </motion.div>
    </div>
  );

  const constraintsRef = useRef(null);

  return (
    <main className={styles.main} onClick={onClick} ref={constraintsRef}>
      {borders}
      {/* <motion.div drag dragConstraints={constraintsRef} dragMomentum={false} dragElastic={0} whileDrag={{ scale: 0.9 }} initial='hidden' animate='visible' exit='hidden' variants={logo}> */}
      <motion.div className={styles.logo} initial='hidden' animate='visible' exit='hidden' variants={logo}>
        <JamiLogo />
      </motion.div>
      <AnimatedPalette />
      <motion.div
        animate={{
          opacity: [0, 1, 0]
          // scale: [1, 1.1, 1]
        }}
        transition={{ delay: 2, repeat: Infinity, duration: 1.4 }}
        variants={prompt}
        className={styles.prompt}
      >
        ( tap to enter )
      </motion.div>
    </main>
  );
}

export default Splash;
