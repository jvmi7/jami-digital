import { motion, useScroll } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Element } from 'react-scroll';

import styles from '@/app/charts/components/IntroSection/AnimatedWords.module.scss';
import { scrollElement } from '@/app/charts/constants';
const AnimatedWords = () => {
  const containerRef = useRef(null);
  const scrollTriggers = [0, 0.4, 0.45, 0.5, 0.55];
  const specialTrigger = 0.2;
  const words = ['charts', 'evolving', 'our perception', 'of value'];
  const colors = [
    'rgb(0, 255, 0)',
    'rgb(128, 247, 0)',
    'rgb(255, 240, 0)',
    'rgb(255, 178, 0)',
    'rgb(255, 119, 0)',
  ];

  const [activeIndices, setActiveIndices] = useState<boolean[]>(
    new Array(words.length).fill(false)
  );
  const [showArt, setShowArt] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setActiveIndices(prev => prev.map((_, index) => latest >= scrollTriggers[index]));
      setShowArt(latest >= specialTrigger);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <>
      <Element name={scrollElement} />
      <div ref={containerRef} className={styles.container}>
        {words.map((word, index) => {
          // Calculate opacity based on position and active count
          const currentOpacity = activeIndices[index] ? 1 : 0;

          // Calculate scale based on position and active count
          const currentScale = 1;

          if (index === 0) {
            return (
              <motion.div
                key={word}
                className={styles.word}
                style={{
                  position: 'relative',
                  top: '16px',
                  display: 'flex',
                }}
              >
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showArt ? 0 : 1, y: showArt ? 16 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ch
                </motion.span>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: currentOpacity,
                    y: activeIndices[index] ? 0 : 50,
                    scale: currentScale,
                    color: showArt ? colors[index] : 'currentColor',
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  art
                </motion.span>
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: showArt ? 0 : 1, y: showArt ? 16 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '55px',
                  }}
                >
                  s
                </motion.span>
              </motion.div>
            );
          }

          return (
            <motion.div
              key={word}
              className={styles.word}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{
                opacity: currentOpacity,
                y: activeIndices[index] ? 0 : 50,
                scale: currentScale,
              }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
              style={{
                position: 'relative',
                top: index === 0 ? `36px` : `16px`,
                color: colors[index],
              }}
            >
              {word}
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export { AnimatedWords };
