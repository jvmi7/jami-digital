import { motion } from 'framer-motion';

import { palette } from '@/home/constants';
import styles from '@/home/InteractiveCanvas/ShapeElement.module.scss';

interface ShapeElementProps {
  colorIndex: number;
  index: number;
  enableAnimation: boolean;
  distance: number;
  animationDelay: number;
}

const ShapeElement = ({
  colorIndex,
  index,
  enableAnimation,
  animationDelay,
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
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.25,
        delay: animationDelay,
        type: 'spring',
      }}
      className={styles.container}
      style={style}
    ></motion.div>
  );
};

export { ShapeElement };
