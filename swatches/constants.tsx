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
      stiffness: 200,
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

export const fullRows = [
  ['/swatches/3.png', '/swatches/41.png', '/swatches/48.png', '/swatches/16.png'],
  ['/swatches/2104.png', '/swatches/344.png', '/swatches/40.png', '/swatches/202.png'],
  ['/swatches/7031.png', '/swatches/410.png', '/swatches/443.png', '/swatches/556.png'],
  ['/swatches/4057.png', '/swatches/469.png', '/swatches/2809.png', '/swatches/6475.png'],
  ['/swatches/6865.png', '/swatches/5149.png', '/swatches/391.png', '/swatches/4135.png'],
];
