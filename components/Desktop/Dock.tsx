import React from 'react';
import styles from './Dock.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { XIcon } from '../../icons/XIcon/XIcon';
import { InstagramIcon } from '../../icons/XIcon/InstagramIcon';
function Dock() {
  const element = {
    hidden: {
      opacity: 0,
      scale: 0.6
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.15, delay: 0.6 }
    }
  };
  return (
    <motion.div className={styles.container} initial='hidden' animate='show' variants={element}>
      <div className={styles.dock}>
        <div className={classNames(styles.dockItem, styles.instagram)}>
          <XIcon height={28} width={28} />
        </div>
        <div className={classNames(styles.dockItem, styles.twitter)}>
          <InstagramIcon height={32} width={32} />
        </div>
        <div className={classNames(styles.dockItem, styles.github)}>
          <div className={styles.dockItemIcon}>
            <Image src='/github-icon.svg' alt='Twitter icon' width={20} height={20} priority />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dock;
