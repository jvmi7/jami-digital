import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useWindowSize } from 'react-use';

import { links } from '../../constants';

import ButtonLayout from './ButtonLayout';
import { GameboyContext } from './context';
import styles from './Gameboy.module.scss';
import Screen from './Screen';
import { ScreenState } from './types';

interface Props {
  initialPage?: ScreenState;
}
function Gameboy({ initialPage }: Props) {
  const [screenState, setScreenState] = useState(initialPage ? initialPage : ScreenState.ANIMATION);
  const [menuIndex, setMenuIndex] = useState(0);
  const menuItemsLength = links.length;
  const { height, width } = useWindowSize();

  const enableTilt = width > 470;

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.12,
      },
    },
  };

  useEffect(() => {
    if (screenState === ScreenState.ANIMATION) {
      setTimeout(() => {
        setScreenState(ScreenState.MENU);
      }, 1650);
    }
  }, [screenState]);

  const aOrBPressed = () => {
    if (screenState === ScreenState.MENU) {
      window.open(links[menuIndex].href, '_self');
    }
  };

  const downOrRightPressed = () => {
    setMenuIndex(prev => (prev + 1) % menuItemsLength);
  };

  const upOrLeftPressed = () => {
    setMenuIndex(prev => (prev - 1 + menuItemsLength) % menuItemsLength);
  };

  return (
    <GameboyContext.Provider value={{ screenState, setScreenState }}>
      <motion.div
        className={styles.container}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={container}
      >
        <Tilt
          tiltEnable={enableTilt}
          className={styles.tiltWrapper}
          perspective={3000}
          scale={enableTilt ? 0.96 : 1}
          transitionEasing={'ease'}
          transitionSpeed={200}
          tiltAngleXManual={enableTilt ? null : 0}
        >
          <motion.div
            style={{ maxWidth: height < 740 ? `${height * 0.6}px` : '470px' }}
            className={styles.gameboy}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 1, type: 'spring', bounce: 0.3 },
            }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Screen menuIndex={menuIndex} screenState={screenState} />
            {screenState !== ScreenState.SHOP && (
              <ButtonLayout
                aOrBPressed={aOrBPressed}
                downOrRightPressed={downOrRightPressed}
                upOrLeftPressed={upOrLeftPressed}
              />
            )}
          </motion.div>
        </Tilt>
      </motion.div>
    </GameboyContext.Provider>
  );
}

export default Gameboy;
