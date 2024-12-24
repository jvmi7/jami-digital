import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ChartPreview from '@/app/charts/components/ChartPreview/ChartPreview';
import styles from '@/app/charts/components/InformationSection/ImageGrid.module.scss';
import { generateRandomValues } from '@/app/charts/helpers';
import { Palette } from '@/app/charts/types';
import { getAnimationProps } from '@/constants/animations';

interface ImageGridProps {
  variant: 'perfection' | 'classic';
}

const generateChartData = (): { values: number[]; palette: Palette }[] => [
  { values: generateRandomValues(), palette: 'classic' as Palette },
  { values: generateRandomValues(), palette: 'ice' as Palette },
  { values: generateRandomValues(), palette: 'fire' as Palette },
  { values: generateRandomValues(), palette: 'punch' as Palette },
];

const perfectionData: { values: number[]; palette: Palette }[] = [
  { values: [66, 66, 66, 66, 66, 66, 66], palette: 'perfect' },
  { values: [1, 3, 7, 15, 33, 70, 100], palette: 'perfect' }, // exponential progression
  { values: [1, 100, 1, 100, 1, 100, 1], palette: 'perfect' },
  { values: [100, 76, 61, 46, 31, 16, 1], palette: 'perfect' },
];

const ImageGrid = ({ variant }: ImageGridProps) => {
  const [data, setData] = useState<{ values: number[]; palette: Palette }[]>([]);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (!inView) return;

    if (variant === 'classic') {
      setData(generateChartData());
      const interval = setInterval(() => {
        setData(generateChartData());
      }, 2000);

      return () => clearInterval(interval);
    } else {
      setData(perfectionData);
    }
  }, [variant, inView]);

  return (
    <div className={styles.container} ref={ref}>
      {data.map((chart, index) => (
        <motion.div key={index} {...getAnimationProps(index)} viewport={{ once: true }}>
          <ChartPreview values={chart.values} palette={chart.palette} animate={true} />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageGrid;
