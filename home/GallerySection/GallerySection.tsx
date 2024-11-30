'use client';

import { RiArrowRightUpLine } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Tags } from '@/components/Tags/Tags';
import { externalLinks } from '@/constants';
import { getAnimationProps } from '@/constants/animations';
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
    <motion.div className={styles.container}>
      <motion.h1 className={styles.title} {...getAnimationProps(0)}>
        abstractions
      </motion.h1>
      <motion.p className={styles.description} {...getAnimationProps(1)}>
        an ongoing collection of pieces inspired by the world around us
      </motion.p>
      <motion.div {...getAnimationProps(2)}>
        <Tags tags={['open edition', 'nfts on zero']} backgroundColor="#ddd" textColor="#999" />
      </motion.div>

      <motion.div className={styles.galleryContainer} {...getAnimationProps(3)}>
        {columns.map((column, columnIndex) => (
          <motion.div
            key={columnIndex}
            className={styles.column}
            {...getAnimationProps(4 + columnIndex)}
          >
            {column.map((image, index) => (
              <motion.div
                key={index}
                className={styles.imageContainer}
                {...getAnimationProps(4 + columnIndex + index)}
              >
                <img className={styles.image} src={`/gallery/${image}.png`} alt={image} />
                <p className={styles.name}>{image}</p>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        className={styles.button}
        href={externalLinks.abstractionsCollection}
        target="_blank"
        rel="noreferrer"
        {...getAnimationProps(7)}
      >
        <p>view on highlight</p>
        <RiArrowRightUpLine size={18} />
      </motion.a>
    </motion.div>
  );
};

export { GallerySection };
