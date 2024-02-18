export const animate = {
  scale: 1,
  opacity: 1,
  transition: {
    type: 'spring',
    stiffness: 300,
    damping: 25,
    delay: 1.25,
  },
};

export const initial = { scale: 0, opacity: 0 };

export const exit = { scale: 0, opacity: 0 };

export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
  },
};
