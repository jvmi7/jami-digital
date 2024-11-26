export const animate = {
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
    delay: 1,
  },
};

export const initial = { scale: 0, opacity: 0 };

export const exit = { scale: 0, opacity: 0 };

export const pageVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
};

export const TOTAL_SWATCHES = 100;
