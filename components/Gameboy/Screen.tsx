import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import JamiLogo from '../JamiLogo';
import styles from './Screen.module.scss';
import AboutScreen from './screens/AboutScreen';
import LoadingScreen from './screens/LoadingScreen';
import MenuScreen from './screens/MenuScreen';
import { ScreenState } from './types';

interface ScreenProps {
  screenState: ScreenState;
  menuIndex: number;
}

function Screen({ screenState, menuIndex }: ScreenProps) {
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
  };

  let screen;

  if (screenState === ScreenState.ANIMATION) {
    screen = <LoadingScreen />;
  } else if (screenState === ScreenState.MENU) {
    screen = <MenuScreen menuIndex={menuIndex} />;
  } else if (screenState === ScreenState.ABOUT) {
    screen = <AboutScreen />;
  } else if (screenState === ScreenState.SHOP) {
    screen = <div> shop </div>;
  }

  const maxHeight = screenState === ScreenState.SHOP ? '100%' : '60vh';

  return (
    <div className={styles.container} style={{ maxHeight: maxHeight }}>
      <div className={styles.screen}>
        <AnimatePresence mode="wait">{screen}</AnimatePresence>
      </div>
      <div className={styles.bottom}>
        <motion.div
          className={styles.colorsContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={item}
        >
          <div className={classNames(styles.square, styles.color1)} />
          <div className={classNames(styles.square, styles.color2)} />
          <div className={classNames(styles.square, styles.color3)} />
          <div className={classNames(styles.square, styles.color4)} />
          <div className={classNames(styles.square, styles.color5)} />
        </motion.div>
        <motion.div
          className={styles.logoContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={item}
        >
          <JamiLogo height={40} width={100} />
        </motion.div>
        <motion.div
          className={styles.powerContainer}
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={item}
        >
          <span>power</span>
          <div className={styles.light} />
        </motion.div>
      </div>
    </div>
  );
}

export default Screen;
