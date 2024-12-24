import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import ChartPreview from '@/app/charts/components/ChartPreview/ChartPreview';
import styles from '@/app/charts/components/InformationSection/TimeImage.module.scss';

const TimeImage = () => {
  const [revealedIndex, setRevealedIndex] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const intervalMilliseconds = 1000;

  // Create initial array of zeros
  const initialValues = Array(7).fill(0);
  const revealedValues = [40, 25, 70, 60, 1, 40, 80];
  // Replace zeros with 100s up to the revealed index
  const values = initialValues.map((_, index) =>
    index < revealedIndex ? revealedValues[index] : 0
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
      }, intervalMilliseconds * 2);
    }

    return () => clearInterval(interval);
  }, [inView, revealedIndex]);

  return (
    <div ref={ref} className={styles.container}>
      <ChartPreview values={values} palette="classic" animate={true} />
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
