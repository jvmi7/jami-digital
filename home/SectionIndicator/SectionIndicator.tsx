'use client';

import classNames from 'classnames';
import styles from './SectionIndicator.module.scss';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { useState } from 'react';
import { Link } from 'react-scroll';

type Props = {
  sectionIndex: number;
};

const SectionIndicator = ({ sectionIndex }: Props) => {
  const { height, width } = useWindowSize();
  const { scrollY } = useScroll();
  const [showIndicator, setShowIndicator] = useState(false);
  const sections = [
    'splash',
    'intro',
    'swatches',
    'charts',
    'gallery',
    'press',
  ];

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest >= height - 300 && width > 800) {
      setShowIndicator(true);
    } else {
      setShowIndicator(false);
    }
  });

  const variants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <motion.div
      className={styles.container}
      initial="hidden"
      animate={showIndicator ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ type: 'spring', damping: 15, stiffness: 100 }}
    >
      {sections.map((section, index) => (
        <Link key={section} to={section} smooth={true} duration={500}>
          <div
            key={section}
            className={classNames(styles.dot, {
              [styles.active]: sectionIndex === index - 1,
            })}
          />
        </Link>
      ))}
    </motion.div>
  );
};

export { SectionIndicator };
