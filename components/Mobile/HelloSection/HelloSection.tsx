import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Image from 'next/image';
import styles from './HelloSection.module.scss';
import { useMeasure, useWindowSize } from 'react-use';

const HelloSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { width } = useWindowSize();

  let yAnimation = 0;
  const xAnimation = width < 900 && width > 750 ? 5 : 1;
  if (width > 1071) {
    yAnimation = 45;
  } else if (width <= 1071 && width > 900) {
    yAnimation = 70;
  } else {
    yAnimation = 15;
  }

  const transition = {
    type: 'spring',
    duration: 0.3,
    stiffness: 100,
    damping: 10,
    mass: 0.5,
  };

  const delay = 0.7;

  const animation_blue = {
    hidden: { opacity: 0, rotate: -8 },
    visible: {
      opacity: 1,
      x: `-${6 * xAnimation}%`,
      y: `-${yAnimation}%`,
      rotate: 5,
      transition: { ...transition },
    },
  };

  const animation_yellow = {
    hidden: { opacity: 0, rotate: 10 },
    visible: {
      opacity: 1,
      x: `${5 * xAnimation}%`,
      y: `${yAnimation}%`,
      rotate: 4,
      transition: { ...transition, delay: delay },
    },
  };

  const animation_red = {
    hidden: { opacity: 0, y: 100, rotate: -10 },
    visible: {
      opacity: 1,
      y: 0,
      x: '0%',
      rotate: -3,
      transition: { ...transition, delay: delay * 1.5 },
    },
  };

  return (
    <div className={styles.container} ref={ref}>
      <AnimatePresence initial>
        {inView && (
          <>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_blue}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_blue.svg'}
                  alt="hello blue"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_yellow}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_yellow.svg'}
                  alt="hello yellow"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
            <div className={styles.imageContainer}>
              <motion.div
                initial="hidden"
                animate="visible"
                variants={animation_red}
                className={styles.image}
              >
                <Image
                  src={'/hello_sticker_red.svg'}
                  alt="hello red"
                  width={500}
                  height={325}
                />
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export { HelloSection };
