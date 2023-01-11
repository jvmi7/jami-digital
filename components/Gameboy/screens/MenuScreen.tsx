import classNames from 'classnames';
import { motion } from 'framer-motion';
import { links } from '../../../constants';
import styles from './MenuScreen.module.scss';

interface Props {
  menuIndex: number;
}
function MenuScreen({ menuIndex }: Props) {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
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
      transition: { duration: 0.8, type: 'spring', bounce: 0.3 }
    }
  };

  return (
    <motion.div initial='hidden' animate='show' variants={container} className={styles.container}>
      <motion.h1 initial='hidden' animate='show' exit='hidden' variants={item}>
        {'main menu'}
      </motion.h1>
      {links.map((link, index) => (
        <motion.div
          className={classNames(styles.linkWrapper, {
            [styles.selected]: index === menuIndex
          })}
          key={index}
          variants={item}
        >
          <a href={link.href} target='_blank' className={styles.link}>
            {link.name}
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default MenuScreen;
