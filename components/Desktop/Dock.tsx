import React from 'react';
import styles from './Dock.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
import { motion } from 'framer-motion';
function Dock() {
  const element = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, type: 'spring', bounce: 0.15, delay: 1 }
    }
  };
  return (
    <motion.div className={styles.container} initial='hidden' animate='show' variants={element}>
      <div className={styles.dock}>
        <div className={styles.itemsWrapper}>
          <div className={classNames(styles.dockItem, styles.instagram)}>
            <div className={styles.dockItemIcon}>
              <Image src='/instagram-icon.svg' alt='Twitter icon' width={20} height={20} priority />
            </div>
          </div>
          <div className={classNames(styles.dockItem, styles.twitter)}>
            <div className={styles.dockItemIcon}>
              <Image src='/twitter-icon.svg' alt='Twitter icon' width={20} height={20} priority />
            </div>
          </div>
          <div className={classNames(styles.dockItem, styles.github)}>
            <div className={styles.dockItemIcon}>
              <Image src='/github-icon.svg' alt='Twitter icon' width={20} height={20} priority />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Dock;
