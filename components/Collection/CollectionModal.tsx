import React from 'react';
import styles from './CollectionModal.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { WindowThemeType } from '../../types';
import { XIcon } from '../../icons/XIcon';
import { CloseIcon } from '../../icons/CloseIcon';

interface CollectionModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  theme: WindowThemeType;
}

const overlayVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 0 }
  },
  exit: {
    opacity: 0
  }
};

const modalVariants = {
  initial: {
    scale: 0.95,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.15 }
  },
  exit: {
    opacity: 0,
    y: 70,
    transition: { duration: 0.15 }
  }
};

const CollectionModal: React.FC<CollectionModalProps> = ({ children, isOpen, onClose, theme }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} onClick={onClose} variants={overlayVariants} initial='initial' animate='animate' exit='exit'>
          <motion.div style={{ backgroundColor: theme.windowAccent, border: `1px solid ${theme.windowBackground}` }} className={styles.modal} onClick={(e) => e.stopPropagation()} variants={modalVariants} initial='initial' animate='animate' exit='exit'>
            {children}
          </motion.div>
          <button className={styles.closeButton}>
            <CloseIcon color={'#ddd'} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { CollectionModal };
