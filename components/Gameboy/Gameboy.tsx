import styles from './Gameboy.module.scss';
import { motion } from 'framer-motion';
import Screen from './Screen';
import { ScreenState } from './types';
import { useEffect, useState } from 'react';
import ButtonLayout from './ButtonLayout';
import { useWindowSize } from 'react-use';
import Tilt from 'react-parallax-tilt';
import { links } from '../../constants';

function Gameboy() {
  const [screenState, setScreenState] = useState(ScreenState.ANIMATION);
  const [menuIndex, setMenuIndex] = useState(0);
  const menuItemsLength = links.length;
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

  useEffect(() => {
    setTimeout(() => {
      setScreenState(ScreenState.MENU);
    }, 1650);
  }, []);

  const aOrBPressed = () => {
    console.log('aOrBPressed');
    if (screenState === ScreenState.MENU) {
      window.open(links[menuIndex].href, '_blank');
    }
  };

  const downOrRightPressed = () => {
    setMenuIndex((prev) => (prev + 1) % menuItemsLength);
  };

  const upOrLeftPressed = () => {
    setMenuIndex((prev) => (prev - 1 + menuItemsLength) % menuItemsLength);
  };

  return (
    <motion.div className={styles.container} initial='hidden' animate='show' exit='hidden' variants={container}>
      <Tilt tiltEnable={enableTilt} className={styles.tiltWrapper} perspective={3000} scale={enableTilt ? 0.96 : 1} transitionEasing={'ease'} transitionSpeed={200} tiltAngleXManual={enableTilt ? null : 0}>
        <motion.div style={{ maxWidth: height < 740 ? `${height * 0.6}px` : '470px' }} className={styles.gameboy} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 1, type: 'spring', bounce: 0.3 } }} exit={{ opacity: 0, scale: 0.8 }}>
          <Screen menuIndex={menuIndex} screenState={screenState} />
          <ButtonLayout aOrBPressed={aOrBPressed} downOrRightPressed={downOrRightPressed} upOrLeftPressed={upOrLeftPressed} />
        </motion.div>
      </Tilt>
    </motion.div>
  );
}

export default Gameboy;
