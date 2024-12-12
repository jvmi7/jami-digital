'use client';

import classNames from 'classnames';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useWindowSize } from 'react-use';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import styles from '@/home/SectionIndicator/SectionIndicator.module.scss';

type Props = {
  sectionIndex: number;
};

const SectionIndicator = ({ sectionIndex }: Props) => {
  const { width } = useWindowSize();
  const [showIndicator, setShowIndicator] = useState(true);
  const sections = ['home', 'intro', 'swatches', 'abstractions', 'charts', 'press'];

  useEffect(() => {
    setShowIndicator(width >= 600);
  }, [width]);

  const variants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: -24,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        delay: 3,
      },
    },
    hover: {
      x: -24,
      opacity: 1,
      scale: 1.2,
      transition: { type: 'spring', damping: 20, stiffness: 200 },
    },
  };

  return (
    <TooltipProvider>
      <motion.div
        className={styles.wrapper}
        initial="hidden"
        animate={showIndicator ? 'visible' : 'hidden'}
        variants={variants}
        whileHover="hover"
      >
        <div className={styles.container}>
          {sections.map((section, index) => (
            <Tooltip key={section} delayDuration={0}>
              <TooltipTrigger>
                <div>
                  <Link to={section} smooth={true} duration={500}>
                    <div
                      className={classNames(styles.dot, {
                        [styles.active]: sectionIndex === index,
                      })}
                    />
                  </Link>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={12}>
                {section}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </motion.div>
    </TooltipProvider>
  );
};

export { SectionIndicator };
