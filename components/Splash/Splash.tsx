import React, { useRef } from 'react';
import styles from './Splash.module.scss';
import classNames from 'classnames';
import CurvedBorder from '../CurvedBorder';
import JamiLogo from '../JamiLogo';
import { motion, useDragControls } from 'framer-motion';
import AnimatedPalette from './AnimatedPalette';
import { useTheme } from '../../hooks/useTheme';
import Tilt from 'react-parallax-tilt';

interface Props {
  onClick?: () => void;
}
function Splash({ onClick }: Props) {
  const { setTheme } = useTheme();
  const logo = {
    hidden: { opacity: 0, scale: 0, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.4 } }
  };

  const container = {
    hidden: { opacity: 0, scale: 0.2, transition: { duration: 1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring', delay: 1.7 } },
    exit: { opacity: 0, scale: 0, transition: { duration: 0.4 } }
  };

  const borders = (
    <div className={styles.borderContainer}>
      <motion.div variants={container} initial='hidden' animate='visible' exit='exit' className={classNames(styles.border, styles.topRight)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' exit='exit' className={classNames(styles.border, styles.topLeft)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' exit='exit' className={classNames(styles.border, styles.bottomRight)}>
        <CurvedBorder />
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='visible' exit='exit' className={classNames(styles.border, styles.bottomLeft)}>
        <CurvedBorder />
      </motion.div>
    </div>
  );

  const constraintsRef = useRef(null);
  return (
    <main className={styles.main} onClick={onClick} ref={constraintsRef}>
      {borders}
      {/* <motion.div drag dragConstraints={constraintsRef} dragMomentum={false} dragElastic={0} whileDrag={{ scale: 0.9 }} initial='hidden' animate='visible' exit='hidden' variants={logo}> */}
      <Tilt tiltReverse transitionSpeed={3333} perspective={500} trackOnWindow scale={1.15} gyroscope={true} className={styles.tiltWrapper}>
        <motion.div className={styles.logo} initial='hidden' animate='visible' exit='exit' variants={logo}>
          <JamiLogo />
        </motion.div>

        <AnimatedPalette />

        <motion.div
          animate={{
            opacity: [0, 1, 0],
            transition: { delay: 1.7, repeat: Infinity, duration: 1.2 }
          }}
          exit={{
            opacity: 0,
            transition: { duration: 1 }
          }}
          className={styles.prompt}
        >
          ( tap to enter )
        </motion.div>
      </Tilt>
    </main>
  );
}

export default Splash;
