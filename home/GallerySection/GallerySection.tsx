'use client';

import { useWindowSize } from 'react-use';
import styles from './GallerySection.module.scss';
import { useEffect, useState } from 'react';
const images = [
  'apple',
  'banana',
  'bricks',
  'calculator',
  'car',
  'cornfield',
  'dollar',
  'figma',
  'golden-gate',
  'goldfish',
  'lemon',
  'orange',
  'pyramid',
  'shark',
  'skateboard',
  'speech-bubble',
  'sunset-ocean',
  'campbell-soup',
  'toothbrush',
];

const GallerySection = () => {
  const { width } = useWindowSize();
  const [numColumns, setNumColumns] = useState(3); // Default to 3 columns

  useEffect(() => {
    setNumColumns(width < 800 ? 2 : 3);
  }, [width]);

  const imagesPerColumn = Math.ceil(images.length / numColumns) - 1;
  const columns = Array.from({ length: numColumns }, (_, i) =>
    images.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>gallery</h1>
      <p className={styles.description}>
        an ongoing collection of pieces inspired by the world around me
      </p>
      <div className={styles.galleryContainer}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img
                  className={styles.image}
                  src={`/gallery/${image}.png`}
                  alt={image}
                />
                <p className={styles.name}>{image}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { GallerySection };
