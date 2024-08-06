import { useRef, useState } from 'react';
import { palette } from '../constants';
import styles from './InteractiveCanvas.module.scss';
import { ShapeElement } from './ShapeElement';
import { JvmiIcon } from '../../icons/JvmiIcon';
import { InteractiveCanvasMetadata } from '../types';

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

type Props = {
  metadata: InteractiveCanvasMetadata;
  hiddenShapes: number[];
};

const InteractiveCanvas = ({ metadata, hiddenShapes }: Props) => {
  const { rows, cols, gap, shapeSize, rowColorOffset } = metadata;
  const [enableAnimation, setEnableAnimation] = useState(true);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [hoveredCell, setHoveredCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const touchTimeout = useRef<number | null>(null);

  const handleMouseEnter = () => {
    setEnableAnimation(false);
  };

  const handleMouseLeave = () => {
    setEnableAnimation(true);
    setHoveredCell(null);
    setCurrentOffset(0);
  };

  const handleMove = (
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>
  ) => {
    let offsetX, offsetY;

    if ('touches' in event) {
      const touch = event.touches[0];
      const rect = event.currentTarget.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;

      // Clear previous timeout if any
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }

      // Set a new timeout to reset hovered cell
      touchTimeout.current = window.setTimeout(() => {
        setHoveredCell(null);
        setEnableAnimation(true);
      }, 1500);
    } else {
      offsetX = event.nativeEvent.offsetX;
      offsetY = event.nativeEvent.offsetY;
    }

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
        onTouchStart={handleMove}
        onTouchMove={handleMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMove}
        onClick={handleClick}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          let colorIndex;
          const coordinates = getCoordinates(index, cols, rows);
          const distance = hoveredCell
            ? getDistance(coordinates, hoveredCell)
            : -1;
          const distanceFromCenter = getDistance(
            { row: Math.floor(rows / 2), col: Math.floor(cols / 2) },
            coordinates
          );

          if (hoveredCell && currentOffset !== 0) {
            colorIndex =
              (Math.floor(distance) + currentOffset) % palette.length;
          } else {
            colorIndex = getColorIndex(index, rows, cols, rowColorOffset);
          }

          const isHidden = hiddenShapes.includes(index);
          let scale;
          if (isHidden) {
            scale = 0;
          } else if (hoveredCell) {
            scale = Math.max(0.6, 1.25 - distance * 0.05);
          } else {
            scale = 1;
          }

          return (
            <div
              key={index}
              style={{
                pointerEvents: 'none',
                transform: `scale(${scale})`,
                transition: '200ms linear transform',
              }}
            >
              <ShapeElement
                key={index}
                index={index}
                animationDelay={distanceFromCenter * 0.05}
                colorIndex={colorIndex}
                enableAnimation={enableAnimation}
                distance={distance}
              />
            </div>
          );
        })}
        <div className={styles.wordmark}>
          <div className={styles.logo}>
            <JvmiIcon width={120} height={120} />
          </div>
          <p>interactive art for the world</p>
        </div>
      </div>
    </>
  );
};

export { InteractiveCanvas };
