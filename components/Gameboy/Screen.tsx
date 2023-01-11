import classNames from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
import JamiLogo from '../JamiLogo';
import styles from './Screen.module.scss';
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
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.3 }
    }
  };

  let screen = <AnimatePresence mode='wait'>{screenState === ScreenState.ANIMATION ? <LoadingScreen /> : <MenuScreen menuIndex={menuIndex} />}</AnimatePresence>;

  if (screenState === ScreenState.OFF) {
  } else if (screenState === ScreenState.ANIMATION) {
  }

  return (
    <div className={styles.container}>
      <div className={styles.screen}>{screen}</div>
      <div className={styles.bottom}>
        <motion.div className={styles.colorsContainer} initial='hidden' animate='show' exit='hidden' variants={item}>
          <div className={classNames(styles.square, styles.color1)} />
          <div className={classNames(styles.square, styles.color2)} />
          <div className={classNames(styles.square, styles.color3)} />
          <div className={classNames(styles.square, styles.color4)} />
          <div className={classNames(styles.square, styles.color5)} />
        </motion.div>
        <motion.div className={styles.logoContainer} initial='hidden' animate='show' exit='hidden' variants={item}>
          <JamiLogo height={40} width={100} />
        </motion.div>
        <motion.div className={styles.powerContainer} initial='hidden' animate='show' exit='hidden' variants={item}>
          <span>power</span>
          <div className={styles.light} />
        </motion.div>
      </div>
    </div>
  );
}

export default Screen;
