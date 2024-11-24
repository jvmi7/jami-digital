'use client';

import { RiArrowRightUpLine } from '@remixicon/react';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Tags } from '@/components/Tags/Tags';
import { externalLinks } from '@/constants';
import styles from '@/home/GallerySection/GallerySection.module.scss';
const images = [
  'calculator',
  'shark',
  'cornfield',
  'apple',
  'dollar',
  'bricks',
  'golden-gate',
  'banana',
  'skateboard',
];

const GallerySection = () => {
  const { width } = useWindowSize();
  const [numColumns, setNumColumns] = useState(3);
  const [currentImages, setCurrentImages] = useState(images);

  useEffect(() => {
    setNumColumns(width < 800 ? 2 : 3);
    if (width < 800) {
      setCurrentImages(images.filter(image => image !== 'shark'));
    } else {
      setCurrentImages(images);
    }
  }, [width]);

  const imagesPerColumn = Math.ceil(currentImages.length / numColumns);
  const columns = Array.from({ length: numColumns }, (_, i) =>
    currentImages.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn)
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>abstractions</h1>
      <p className={styles.description}>
        an ongoing collection of pieces inspired by the world around us
      </p>
      <Tags tags={['open edition', 'nfts on zero']} backgroundColor="#ddd" textColor="#999" />

      <div className={styles.galleryContainer}>
        {columns.map((column, index) => (
          <div key={index} className={styles.column}>
            {column.map((image, index) => (
              <div key={index} className={styles.imageContainer}>
                <img className={styles.image} src={`/gallery/${image}.png`} alt={image} />
                <p className={styles.name}>{image}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <a
        className={styles.button}
        href={externalLinks.abstractionsCollection}
        target="_blank"
        rel="noreferrer"
      >
        <p>view on highlight</p>
        <RiArrowRightUpLine size={18} />
      </a>
    </div>
  );
};

export { GallerySection };
