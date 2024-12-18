import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import { useWindowSize } from 'react-use';

import { palette } from '@/home/constants';
import styles from '@/home/InteractiveCanvas/InteractiveCanvas.module.scss';
import { ShapeElement } from '@/home/InteractiveCanvas/ShapeElement';
import { InteractiveCanvasMetadata } from '@/home/types';

const getColorIndex = (index: number, cols: number, rowColorOffset: number) => {
  const colorIndex = index % cols;
  const rowOffset = Math.floor(index / cols) * rowColorOffset;
  return (colorIndex + rowOffset) % palette.length;
};

const getCoordinates = (index: number, cols: number) => {
  const row = Math.floor(index / cols);
  const col = index % cols;
  return { row, col };
};

const getDistance = (a: { row: number; col: number }, b: { row: number; col: number }) => {
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
  const { width } = useWindowSize();
  const isMobile = width < 550;

  const [hoveredCell, setHoveredCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [activeCell, setActiveCell] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const touchTimeout = useRef<number | null>(null);

  const hideText = hiddenShapes.length > rows * cols * 0.5;
  const hideCanvas = hiddenShapes.length === rows * cols;

  const handleMouseEnter = () => {
    setEnableAnimation(false);
  };

  const handleMouseLeave = () => {
    setEnableAnimation(true);
    setHoveredCell(null);
    setCurrentOffset(0);
  };

  const handleMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>
  ) => {
    let offsetX, offsetY;
    const isMobileDevice = 'touches' in event;

    if (isMobileDevice) {
      const touch = event.touches[0];
      const rect = event.currentTarget.getBoundingClientRect();
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;

      // Clear previous timeout if any
      if (touchTimeout.current) {
        clearTimeout(touchTimeout.current);
      }
    } else {
      offsetX = event.nativeEvent.offsetX;
      offsetY = event.nativeEvent.offsetY;
    }

    const col = Math.floor(offsetX / (shapeSize + gap));
    const row = Math.floor(offsetY / (shapeSize + gap));

    if (!isMobile) {
      setHoveredCell({ row, col });
    }
    setActiveCell({ row, col });
  };

  const handleClick = () => {
    setCurrentOffset(currentOffset => currentOffset + 1);
  };

  return (
    <div className={styles.container} style={{ visibility: hideCanvas ? 'hidden' : 'visible' }}>
      {/* <button className={styles.mintButton}>
        <span>mint</span>
        <RiArrowRightUpLine size={18} />
      </button> */}
      <div
        className={styles.canvas}
        style={{
          gridTemplateColumns: `repeat(${cols}, ${shapeSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${shapeSize}px)`,
          gap: `${gap}px`,
        }}
        onTouchStart={handleMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMove}
        onClick={handleClick}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          let colorIndex;
          const coordinates = getCoordinates(index, cols);
          const distance = activeCell ? getDistance(coordinates, activeCell) : -1;
          const distanceFromCenter = getDistance(
            { row: Math.floor(rows / 2), col: Math.floor(cols / 2) },
            coordinates
          );

          if (activeCell && currentOffset !== 0) {
            colorIndex = (Math.floor(distance) + currentOffset) % palette.length;
          } else {
            colorIndex = getColorIndex(index, cols, rowColorOffset);
          }

          const isHidden = hiddenShapes.includes(index);
          let scale;
          if (isHidden) {
            scale = 0;
          } else if (hoveredCell) {
            scale = Math.max(0.6, 1.3 - distance * 0.06);
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
      </div>
      <Link to={'intro'} smooth={true} offset={-72} duration={600}>
        <motion.p
          className={styles.tagline}
          initial={{ opacity: 0 }}
          animate={{
            opacity: hideText ? 0 : 1,
            transition: { delay: hideText ? 0 : 1.5 },
          }}
        >
          <span className={styles.interactive}>[ art + code ]</span>
        </motion.p>
      </Link>
    </div>
  );
};

export { InteractiveCanvas };
