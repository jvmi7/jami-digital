import { palette } from '../constants';
import styles from './InteractiveCanvas.module.scss';
import { ShapeElement } from './ShapeElement';

const getColorIndex = (
  index: number,
  rows: number,
  cols: number,
  rowColorOffset: number
) => {
  const colorIndex = index % cols;
  const rowOffset = Math.floor(index / cols) * rowColorOffset;
  return (colorIndex + rowOffset) % palette.length;
};

const InteractiveCanvas = () => {
  const rows = 10;
  const cols = 7;
  const gap = 10;
  const shapeSize = 50;
  const rowColorOffset = 2;

  return (
    <div
      className={styles.container}
      style={{
        gridTemplateColumns: `repeat(${cols}, ${shapeSize}px)`,
        gridTemplateRows: `repeat(${rows}, ${shapeSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <ShapeElement
          key={index}
          index={index}
          colorIndex={getColorIndex(index, rows, cols, rowColorOffset)}
        />
      ))}
    </div>
  );
};

export { InteractiveCanvas };
