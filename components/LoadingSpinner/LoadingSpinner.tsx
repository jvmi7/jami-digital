import React from 'react';
import styles from './LoadingSpinner.module.scss'; // Import the CSS module

interface LoadingSpinnerProps {
  width?: number; // Width of the spinner in pixels
  color?: string; // Color of the spinner
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ width = 40, color = 'white' }) => {
  const spinnerStyle = {
    width: `${width}px`,
    height: `${width}px`,
    borderWidth: `${width / 10}px`, // Makes the spinner thinner
    borderColor: `rgba(255, 255, 255, 0.3)`,
    borderTopColor: color,
  };

  return <div className={styles.spinner} style={spinnerStyle}></div>;
};

export default LoadingSpinner;
