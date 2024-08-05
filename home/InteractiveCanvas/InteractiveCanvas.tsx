import { useState } from 'react';
import { palette } from '../constants';
import styles from './InteractiveCanvas.module.scss';
import { ShapeElement } from './ShapeElement';
import { JvmiIcon } from '../../icons/JvmiIcon';

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

const getCoordinates = (index: number, cols: number, rows: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return { row, col };
};

const getDistance = (
  a: { row: number; col: number },
  b: { row: number; col: number }
) => {
  return Math.sqrt((a.row - b.row) ** 2 + (a.col - b.col) ** 2);
};

const InteractiveCanvas = () => {
  const rows = 13;
  const cols = 7;
  const gap = 10;
  const shapeSize = 50;
  const rowColorOffset = 2;

  const [enableAnimation, setEnableAnimation] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [hoveredCell, setHoveredCell] = useState<{
    row: number;
    col: number;
  } | null>(null);

  const handleMouseEnter = () => {
    setEnableAnimation(false);
  };

  const handleMouseLeave = () => {
    setEnableAnimation(true);
    setHoveredCell(null);
    setCurrentOffset(0);
  };

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const col = Math.floor(offsetX / (shapeSize + gap));
    const row = Math.floor(offsetY / (shapeSize + gap));
    setHoveredCell({ row, col });
  };

  const handleClick = () => {
    setCurrentOffset(currentOffset => currentOffset + 1);
  };

  return (
    <>
      <div
        className={styles.container}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${shapeSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${shapeSize}px)`,
          gap: `${gap}px`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          let colorIndex;
          const coordinates = getCoordinates(index, cols, rows);
          const distance = hoveredCell
            ? getDistance(coordinates, hoveredCell)
            : -1;

          if (hoveredCell && currentOffset !== 0) {
            colorIndex =
              (Math.floor(distance) + currentOffset) % palette.length;
          } else {
            colorIndex = getColorIndex(index, rows, cols, rowColorOffset);
          }

          // scale with a minimum of 0.25

          const scale = hoveredCell ? Math.max(0.6, 1.25 - distance * 0.04) : 1;

          return (
            <div
              key={index}
              style={{
                pointerEvents: 'none',
                transform: `scale(${scale})`,
                transition: '500ms ease transform',
              }}
            >
              <ShapeElement
                key={index}
                index={index}
                colorIndex={colorIndex}
                enableAnimation={enableAnimation}
                distance={distance}
              />
            </div>
          );
        })}
        <div className={styles.logo}>
          <JvmiIcon width={120} height={120} />
        </div>
      </div>
    </>
  );
};

export { InteractiveCanvas };
