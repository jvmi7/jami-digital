import React from 'react';
import styles from './Dock.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { XIcon } from '../../icons/XIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { MirrorIcon } from '../../icons/MirrorIcon';
import { GithubIcon } from '../../icons/GithubIcon';
import { MessagesIcon } from '../../icons/MessagesIcon';

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
        <DockItem className={styles.twitter} label='x.com'>
          <XIcon height={28} width={28} />
        </DockItem>
        <DockItem className={styles.instagram} label='instagram'>
          <InstagramIcon height={36} width={36} />
        </DockItem>
        <DockItem className={styles.mirror} label='mirror.xyz'>
          <MirrorIcon height={28} width={28} />
        </DockItem>
        <DockItem className={styles.github} label='github'>
          <GithubIcon height={32} width={32} />
        </DockItem>
        <div className={styles.divider} />
        <DockItem className={styles.messages} label='messages' showNotification>
          <MessagesIcon height={30} width={30} />
        </DockItem>
      </div>
    </motion.div>
  );
}

const DockItem = ({ children, className, label, showNotification }: { children: React.ReactNode; className?: string; label: string; showNotification?: boolean }) => {
  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className={classNames(styles.dockItem, className)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div className={styles.tooltip} variants={tooltipVariants} initial='hidden' animate={isHovered ? 'visible' : 'hidden'}>
        {label}
      </motion.div>
      {showNotification && <div className={styles.notification}>1</div>}
      {children}
    </div>
  );
};

export default Dock;
