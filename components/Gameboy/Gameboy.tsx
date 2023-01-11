import styles from './Gameboy.module.scss';
import { motion } from 'framer-motion';
import Screen from './Screen';
import { ScreenState } from './types';
import { useState } from 'react';
import ButtonLayout from './ButtonLayout';
import { useWindowSize } from 'react-use';
import Tilt from 'react-parallax-tilt';

function Gameboy() {
  const [screenState, setScreenState] = useState(ScreenState.OFF);
  const [menuIndex, setMenuIndex] = useState(0);
  const { height, width } = useWindowSize();

  const enableTilt = width > 470;

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.12
      }
    }
  };

  return (
    <motion.div className={styles.container} initial='hidden' animate='show' exit='hidden' variants={container}>
      <Tilt tiltEnable={enableTilt} className={styles.tiltWrapper} perspective={3000} scale={enableTilt ? 0.96 : 1} transitionEasing={'ease'} transitionSpeed={200} tiltAngleXManual={enableTilt ? null : 0}>
        <motion.div style={{ maxWidth: height < 740 ? `${height * 0.6}px` : '470px' }} className={styles.gameboy} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 1, type: 'spring', bounce: 0.3 } }} exit={{ opacity: 0, scale: 0.8 }}>
          <Screen menuIndex={menuIndex} screenState={screenState} />
          <ButtonLayout />
        </motion.div>
      </Tilt>
    </motion.div>
  );
}

export default Gameboy;
