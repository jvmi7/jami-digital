// components/MenuButton.tsx
import { motion } from 'framer-motion';
import React from 'react';

import styles from './Header.module.scss';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => {
  const lineCommonStyle = {
    width: 25,
    height: 2.5,
    backgroundColor: 'var(--foreground)',
    originX: 0.5,
  };

  const topLineVariants = {
    closed: { rotate: 0, translateY: -4 },
    open: { rotate: 45, translateY: 2 },
  };

  const bottomLineVariants = {
    closed: { rotate: 0, translateY: 4 },
    open: { rotate: -45, translateY: -4 },
  };

  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        borderRadius: 12,
      }}
      className={styles.menuButton}
    >
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={topLineVariants}
        style={{ ...lineCommonStyle, marginBottom: 4 }}
      />
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={bottomLineVariants}
        style={lineCommonStyle}
      />
    </button>
  );
};

export default MenuButton;
