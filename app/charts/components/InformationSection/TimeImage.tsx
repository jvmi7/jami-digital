import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ChartPreview from '@/app/charts/components/ChartPreview/ChartPreview';
import styles from '@/app/charts/components/InformationSection/TimeImage.module.scss';
import { generateRandomValues } from '@/app/charts/helpers';
import { Palette } from '@/app/charts/types';

const TimeImage = () => {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const [phase, setPhase] = useState(0);
  const [currentValues, setCurrentValues] = useState(() => generateRandomValues());
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const intervalMilliseconds = 1000;

  // Create initial array of zeros
  const initialValues = Array(7).fill(0);
  // Replace zeros with 100s up to the revealed index
  const values = initialValues.map((_, index) =>
    index < revealedIndex ? currentValues[index] : 0
  );

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (inView && revealedIndex < 7) {
      interval = setInterval(() => {
        setRevealedIndex(prevIndex => prevIndex + 1);
      }, intervalMilliseconds);
    }

    if (revealedIndex === 7) {
      setTimeout(() => {
        setRevealedIndex(0);
        setPhase(prev => prev + 1);
        setCurrentValues(generateRandomValues()); // Generate new values for next phase
      }, intervalMilliseconds * 2);
    }

    return () => clearInterval(interval);
  }, [inView, revealedIndex]);

  // Array of palettes to cycle through
  const palettes: Palette[] = ['classic', 'ice', 'fire', 'punch'];

  return (
    <div ref={ref} className={styles.container}>
      <ChartPreview values={values} palette={palettes[phase % palettes.length]} animate={true} />
      <ProgressBar progress={(revealedIndex * 100) / 7} />
    </div>
  );
};

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarForeground} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default TimeImage;
