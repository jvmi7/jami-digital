import React from 'react';
import styles from './CollectionModal.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { WindowThemeType } from '../../types';
import { CloseIcon } from '../../icons/CloseIcon';
import WindowContext from '../../context/WindowContext';
import { useMeasure } from 'react-use';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: WindowThemeType;
  image: React.ReactNode;
  content: React.ReactNode;
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

const CollectionModal: React.FC<CollectionModalProps> = ({ isOpen, onClose, theme, image, content }) => {
  const { width, height } = React.useContext(WindowContext);
  const contentPaneWidth = 350;
  const modalPadding = 90; // Adjust this based on your modal's padding
  const totalModalPadding = modalPadding * 2;
  const gap = 8; // If you have a gap between the image and content pane

  const [ref, { height: modalHeight }] = useMeasure<HTMLDivElement>();

  // Calculate the maximum size for the image
  const maxSize = Math.min(width - totalModalPadding - contentPaneWidth - gap, height - totalModalPadding);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className={styles.overlay} onClick={onClose} variants={overlayVariants} initial='initial' animate='animate' exit='exit'>
          <motion.div ref={ref} style={{ backgroundColor: theme.windowAccent, border: `1px solid ${theme.windowBackground}` }} className={styles.modal} onClick={(e) => e.stopPropagation()} variants={modalVariants} initial='initial' animate='animate' exit='exit'>
            <div className={styles.image} style={{ backgroundColor: theme.windowBackground, width: Math.min(maxSize, modalHeight), height: modalHeight }}>
              {image}
            </div>

            <div className={styles.content} style={{ width: `${contentPaneWidth}px` }}>
              {content}
            </div>
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
