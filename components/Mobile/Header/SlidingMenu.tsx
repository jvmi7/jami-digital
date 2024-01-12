// components/SlidingMenu.tsx
import { motion } from 'framer-motion';
import React from 'react';
import styles from './SlidingMenu.module.scss';

interface SlidingMenuProps {
  isOpen: boolean;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen }) => {
  const variants = {
    open: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // Custom easing function
    },
    closed: {
      x: '-100%',
      transition: { duration: 0.2, ease: 'easeInOut' }, // Standard easing
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
      className={styles.container}
    >
      {/* Menu content here */}
      <p>menu item</p>
    </motion.div>
  );
};

export { SlidingMenu };
