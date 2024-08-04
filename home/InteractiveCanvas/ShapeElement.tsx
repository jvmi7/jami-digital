import React, { useEffect } from 'react';
import styles from './ShapeElement.module.scss';
import { palette } from '../constants';
import { motion } from 'framer-motion';

interface ShapeElementProps {
  colorIndex: number;
  index: number;
}

const ShapeElement = ({ colorIndex, index }: ShapeElementProps) => {
  const randomDelay = Math.random();

  return (
    <motion.div
      key={index}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.25,
        delay: randomDelay,
        type: 'spring',
        stiffness: 200,
        damping: 7,
        bounce: 0.25,
        mass: 0.75,
      }}
      className={styles.container}
      style={{
        backgroundColor: palette[colorIndex],
        animation: `colorCycle${(colorIndex + 1) % palette.length} 5s infinite linear alternate-reverse`,
        animationDelay: '4s',
      }}
    ></motion.div>
  );
};

export { ShapeElement };
