import { motion } from 'framer-motion';

import styles from '@/app/charts/components/ChartPreview/ChartPreview.module.scss';
import { getColorFromPalette } from '@/app/charts/helpers';
import { Palette } from '@/app/charts/types';

interface ChartPreviewProps {
  values: number[];
  palette: Palette;
  animate?: boolean;
}

const ChartPreview = ({ values, palette, animate = false }: ChartPreviewProps) => {
  const background = '#000000';
  const surface = '#111111';

  return (
    <div className={styles.container}>
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className={styles.svg}>
        <rect x="0" y="0" width="1000" height="1000" fill={surface} rx="80" />
        {values.map((value, index) => {
          const height = value === 0 ? 560 : 90 + (value * 470) / 100;
          const barColor = value === 0 ? background : getColorFromPalette(value, index, palette);
          const x = 137 + index * 106;
          const y = 220 + (560 - height);
          return (
            <g key={index}>
              <motion.rect
                x={x}
                initial={{ height: 0, y: 220 + 560 }}
                animate={{ height, y }}
                transition={{
                  duration: animate ? 1 : 0,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                }}
                width={90}
                fill={barColor}
                rx={45}
                ry={45}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ChartPreview;
