import { useEffect, useMemo, useRef, useState } from 'react';
import { InteractiveCanvas } from '../InteractiveCanvas/InteractiveCanvas';
import styles from './SplashSection.module.scss';
import { generateAllAnimations, generateRandomOrder } from '../helpers';
import { palette } from '../constants';
import { useMeasure, useWindowScroll } from 'react-use';

const rows = 15;
const cols = 11;
const gap = 7;
const shapeSize = 25;
const rowColorOffset = 2;

const SplashSection = () => {
  useEffect(() => {
    generateAllAnimations(palette, document);
  }, []);

  const [ref, { height: viewportHeight }] = useMeasure<HTMLDivElement>();
  const { y } = useWindowScroll();

  const randomOrder = useMemo(() => {
    return generateRandomOrder(rows * cols);
  }, [rows, cols]);

  // number between 0 and 100
  const scrollPercentage = (y / viewportHeight) * 10;

  const hiddenShapes = randomOrder.slice(
    0,
    Math.floor(scrollPercentage * randomOrder.length)
  );

  return (
    <div className={styles.viewport} ref={ref}>
      <InteractiveCanvas
        metadata={{ rows, cols, gap, shapeSize, rowColorOffset }}
        hiddenShapes={hiddenShapes}
      />
    </div>
  );
};

export { SplashSection };
