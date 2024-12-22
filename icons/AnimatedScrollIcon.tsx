import { motion } from 'framer-motion';

import { IconProps } from '@/icons/types';

const AnimatedScrollIcon = ({ size = 24, color = 'var(--card)' }: IconProps) => {
  const animationDelta = size / 6;

  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size * 0.7}px`,
        backgroundColor: color,
        borderRadius: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          height: `${size * 0.15}px`,
          width: `${size * 0.15}px`,
          backgroundColor: 'var(--chat-bubble-grey-text)',
          borderRadius: '100px',
        }}
        animate={{
          y: [animationDelta - 2, -animationDelta - 2, animationDelta - 2],
          opacity: [1, 0, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
          },
          opacity: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            times: [0, 0.5, 1],
          },
        }}
      />
    </div>
  );
};

export { AnimatedScrollIcon };
