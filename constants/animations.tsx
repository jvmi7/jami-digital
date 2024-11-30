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

export const ANIMATION_DURATION = 0.6;
export const BASE_ANIMATION = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    margin: '50px',
  },
};

export const getAnimationProps = (index: number) => ({
  ...BASE_ANIMATION,
  transition: {
    duration: ANIMATION_DURATION,
    delay: index * 0.1,
    ease: [0.25, 0.1, 0.25, 1],
    opacity: { duration: ANIMATION_DURATION * 1.2 },
  },
});
