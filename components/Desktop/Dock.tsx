import React from 'react';
import styles from './Dock.module.scss';
import Image from 'next/image';
import classNames from 'classnames';
function Dock() {
  return (
    <div className={styles.container}>
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
    </div>
  );
}

export default Dock;
