export const buttonTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 15,
};

export const buttonHoverScale = 1.05;

export const buttonVariants = (hoveredScale: number) => ({
  initial: {
    scale: 1,
  },
  hover: {
    scale: hoveredScale,
  },
});

export const tooltipDelay = 400;
