import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ItemCard.module.scss';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

interface ItemCardProps {
  imgSrc: string;
  name?: string;
  onClick?: () => void;
}

const ItemCard = ({ imgSrc, name, onClick }: ItemCardProps) => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading status
  const cursor = onClick ? 'pointer' : 'var(--cursor-default)';

  return (
    <div className={styles.container} onClick={onClick} style={!isLoading ? { cursor: 'pointer' } : {}}>
      {isLoading && (
        <div className={styles.spinner}>
          <LoadingSpinner width={30} color='white' />
        </div>
      )}
      <img
        className={styles.img}
        src={imgSrc}
        alt={name}
        onLoad={() => setIsLoading(false)} // Set isLoading to false when image is loaded
        style={{ display: isLoading ? 'none' : 'block', cursor: cursor }} // Hide image while loading
      />
      {!isLoading && name && (
        <div className={styles.overlay}>
          <div className={styles.text}>{name}</div>
        </div>
      )}
    </div>
  );
};

export { ItemCard };
