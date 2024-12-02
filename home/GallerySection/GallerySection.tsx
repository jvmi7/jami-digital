'use client';

import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCloseFill,
} from '@remixicon/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import { Tags } from '@/components/Tags/Tags';
import { ImagePreviewDialog } from '@/components/ImagePreview/ImagePreviewDialog';
import { externalLinks } from '@/constants';
import { buttonVariants, buttonTransition, getAnimationProps } from '@/constants/animations';
import { abstractions } from '@/home/GallerySection/constants';
import styles from '@/home/GallerySection/GallerySection.module.scss';
import { ImagePreview } from '@/components/ImagePreview/ImagePreview';

const GallerySection = () => {
  const { width } = useWindowSize();
  const [numColumns, setNumColumns] = useState(3);
  const [currentAbstractions, setCurrentAbstractions] = useState(abstractions);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setNumColumns(width < 800 ? 2 : 3);
    if (width < 800) {
      setCurrentAbstractions(abstractions.filter(abstraction => abstraction.name !== 'goldfish'));
    } else {
      setCurrentAbstractions(abstractions);
    }
  }, [width]);

  const imagesPerColumn = Math.ceil(currentAbstractions.length / numColumns);
  const columns = Array.from({ length: numColumns }, (_, i) =>
    currentAbstractions.slice(i * imagesPerColumn, (i + 1) * imagesPerColumn)
  );

  const handlePrevious = () => {
    setCurrentIndex(prev => (prev === 0 ? currentAbstractions.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev === currentAbstractions.length - 1 ? 0 : prev + 1));
  };

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
            {column.map((abstraction, index) => {
              const absoluteIndex = columnIndex * imagesPerColumn + index;

              return (
                <ImagePreviewDialog
                  key={index}
                  trigger={
                    <motion.div
                      className={styles.imageContainer}
                      {...getAnimationProps(4 + columnIndex + index)}
                    >
                      <ImagePreview
                        name={abstraction.name}
                        src={`/gallery/${abstraction.name}.png`}
                        animationDelay={4 + columnIndex + index}
                      />
                    </motion.div>
                  }
                  iframeUrl={currentAbstractions[currentIndex].animation_url}
                  bottom={
                    <a
                      href={currentAbstractions[currentIndex].mint_url}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.button}
                    >
                      <span>mint {currentAbstractions[currentIndex].name}</span>
                      <RiArrowRightUpLine size={16} />
                    </a>
                  }
                  onOpenChange={open => {
                    if (open) {
                      setCurrentIndex(absoluteIndex);
                    }
                  }}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                />
              );
            })}
          </motion.div>
        ))}
      </motion.div>
      <motion.a
        className={styles.button}
        href={externalLinks.abstractionsCollection}
        target="_blank"
        rel="noreferrer"
        {...getAnimationProps(7)}
        variants={buttonVariants(1.025)}
        transition={buttonTransition}
        whileHover="hover"
      >
        <p>view on highlight</p>
        <RiArrowRightUpLine size={18} />
      </motion.a>
    </motion.div>
  );
};

export { GallerySection };
