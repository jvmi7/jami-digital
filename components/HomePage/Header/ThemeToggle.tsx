import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { useTheme } from '../../../context/ThemeContext';

import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const height = 8;

  const [isFirstMount, setIsFirstMount] = useState(true);

  useEffect(() => {
    setIsFirstMount(false);
  }, []);

  const buttonVariants = {
    initial: {
      opacity: 0,
      y: -55,
    },
    animate: {
      opacity: 1,
      y: -20,
      transition: isFirstMount ? { delay: 2 } : {},
    },
  };

  return (
    <motion.button
      initial="initial"
      animate="animate"
      variants={buttonVariants}
      // whileHover={{ scale: 1.1 }}
      whileTap={{ y: -6 }}
      className={styles.container}
      onClick={() => {
        setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');
      }}
    >
      {Array.from({ length: height }).map((_, index) => (
        <div key={index} className={styles.circle} />
      ))}
      <div className={styles.handle} />
    </motion.button>
  );
};

export { ThemeToggle };
