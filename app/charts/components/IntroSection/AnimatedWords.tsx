import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import styles from '@/app/charts/components/IntroSection/AnimatedWords.module.scss';

const AnimatedWords = () => {
  const containerRef = useRef(null);
  const scrollTriggers = [0, 0.3, 0.4, 0.5, 0.6];
  const words = ['charts', 'price', 'trends', 'numbers', 'interaction'];

  const [activeIndices, setActiveIndices] = useState<boolean[]>(
    new Array(words.length).fill(false)
  );

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate how many words are currently active
  const activeCount = activeIndices.filter(Boolean).length;

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', latest => {
      setActiveIndices(prev => prev.map((_, index) => latest >= scrollTriggers[index]));
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className={styles.container}>
      {words.map((word, index) => {
        // Calculate opacity based on position and active count
        const currentOpacity = activeIndices[index]
          ? 1 - ((activeCount - index - 1) / Math.max(activeCount, 1)) * 0.9
          : 0;

        // Calculate scale based on position and active count
        const currentScale = activeIndices[index]
          ? 1 - ((activeCount - index - 1) / Math.max(activeCount, 1)) * 0.3
          : 0.8;

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
              top: index === 0 ? `16px` : `8px`,
            }}
          >
            {word}
          </motion.div>
        );
      })}
    </div>
  );
};

export { AnimatedWords };
