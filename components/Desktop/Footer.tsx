import React from 'react';
import styles from './Footer.module.scss';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { XIcon } from '../../icons/XIcon';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { MirrorIcon } from '../../icons/MirrorIcon';
import { GithubIcon } from '../../icons/GithubIcon';
import { MessagesIcon } from '../../icons/MessagesIcon';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { ChatMessages } from '../ChatMessages';
import { Button } from '../Button/Button';
import Image from 'next/image';
import { CheckIcon } from '../../icons/CheckIcon';

const Footer = () => {
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
      <DropdownMenu>
        <DropdownMenuTrigger className={styles.messagesTrigger}>
          <MessagesIcon height={18} width={18} color='currentColor' variant={2} />
          <span>chat</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='start' className={styles.contentContainer}>
          <div className={styles.header}>
            <Image className={styles.avatar} src='/avatar.png' alt='profile avatar' height={24} width={24} />
            <div>jvmi</div>
            <CheckIcon height={13} width={13} color={'#0490EA'} />
          </div>
          <ChatMessages />
          <Button themeName='dark'>click to reply</Button>
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
};

export { Footer };
