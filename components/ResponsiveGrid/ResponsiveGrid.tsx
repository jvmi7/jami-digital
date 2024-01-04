import React, { ReactNode } from 'react';
import { useMeasure } from 'react-use';
import styles from './ResponsiveGrid.module.scss';

interface GridProps {
  children: ReactNode;
  minColumnWidth: number; // minimum width for each column in pixels
  gap: number; // spacing between grid items in pixels
}

const ResponsiveGrid: React.FC<GridProps> = ({ children, minColumnWidth, gap }) => {
  const [ref, { width }] = useMeasure<HTMLDivElement>();

  const numColumns = Math.floor(width / minColumnWidth) || 1; // Ensure at least one column

  return (
    <div className={styles.container}>
      <div
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { ResponsiveGrid };
