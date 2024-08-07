import { useEffect, useMemo, useRef, useState } from 'react';
import { InteractiveCanvas } from '../InteractiveCanvas/InteractiveCanvas';
import styles from './SplashSection.module.scss';
import { generateAllAnimations, generateRandomOrder } from '../helpers';
import { palette } from '../constants';
import { useMeasure, useWindowScroll } from 'react-use';
import { ThemeToggle } from '../../components/HomePage/Header/ThemeToggle';

const SplashSection = () => {
  useEffect(() => {
    generateAllAnimations(palette, document);
  }, []);

  const [ref, { height: viewportHeight, width: viewportWidth }] =
    useMeasure<HTMLDivElement>();
  const { y } = useWindowScroll();

  const rows = Math.min(Math.floor(viewportHeight / 50), 20);
  const cols = Math.min(Math.floor(viewportWidth / 40), 25);

  console.log({ rows, cols });
  const gap = 7;
  const shapeSize = 25;
  const rowColorOffset = 2;

  const randomOrder = useMemo(() => {
    return generateRandomOrder(rows * cols);
  }, [rows, cols]);

  // number between 0 and 100
  const scrollPercentage = (y / viewportHeight) * 5;

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
      <ThemeToggle />
    </div>
  );
};

export { SplashSection };
