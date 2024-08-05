import React, { useEffect } from 'react';
import styles from './ShapeElement.module.scss';
import { palette } from '../constants';
import { motion } from 'framer-motion';

interface ShapeElementProps {
  colorIndex: number;
  index: number;
  enableAnimation: boolean;
  distance: number;
}

const ShapeElement = ({
  colorIndex,
  index,
  enableAnimation,
  distance,
}: ShapeElementProps) => {
  const borderRadius = `200px`;
  const baseStyles = {
    backgroundColor: palette[colorIndex],
    borderRadius: borderRadius,
  };

  const style = enableAnimation
    ? {
        ...baseStyles,
        animation: `colorCycle${(colorIndex + 1) % palette.length} 5s infinite linear alternate-reverse`,
        animationDelay: '4s',
      }
    : baseStyles;

  return (
    <motion.div
      key={index}
      initial={{ scale: 0.25, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.25,
        delay: index * 0.005,
        type: 'spring',
        stiffness: 200,
        damping: 30,
        bounce: 0,
        mass: 0.5,
      }}
      className={styles.container}
      style={style}
    ></motion.div>
  );
};

export { ShapeElement };
