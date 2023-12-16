import classNames from 'classnames';
import { motion } from 'framer-motion';
import { links } from '../../../constants';
import MenuIcon from '../../MenuIcon/MenuIcon';
import styles from './MenuScreen.module.scss';
import { ScreenState } from '../types';
import { useContext } from 'react';
import { GameboyContext } from '../context';

interface Props {
  menuIndex: number;
}

function MenuScreen({ menuIndex }: Props) {
  const { screenState, setScreenState } = useContext(GameboyContext);

  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.025
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.2 }
    }
  };

  const mainLink = links[0];
  const remainingLinks = links.slice(1);

  return (
    <motion.div initial='hidden' animate='show' variants={container} className={styles.container}>
      <motion.h1 initial='hidden' animate='show' exit='hidden' variants={item}>
        {'main menu'}
      </motion.h1>

      <div className={styles.menuContainer}>
        <motion.div
          className={classNames(
            {
              [styles.selected]: menuIndex === 0
            },
            styles.main
          )}
          onClick={() => {
            setScreenState(ScreenState.SHOP);
          }}
        >
          {mainLink.name}
          {menuIndex === 0 && (
            <>
              <img src='/sparkle-1.svg' className={classNames(styles.sparkle, styles.sparkle1)} />
              <img src='/sparkle-2.svg' className={classNames(styles.sparkle, styles.sparkle2)} />
            </>
          )}
        </motion.div>
        <div className={styles.menuIcons}>
          {remainingLinks.map((link, index) => (
            <motion.div
              className={classNames(styles.iconWrapper, {
                [styles.selected]: index + 1 === menuIndex
              })}
              key={index}
              variants={item}
              onClick={() => {
                window.open(link.href, '_self');
              }}
            >
              <MenuIcon iconType={link.icon} description={link.name} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default MenuScreen;
