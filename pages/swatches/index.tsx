'use client';

import { useEffect } from 'react';
import styles from './swatches.module.scss';
import { Header } from './Header/Header';
import { useWindowSize } from 'react-use';
import { Footer } from './Footer/Footer';

const swatches = () => {
  const { width, height } = useWindowSize();

  useEffect(() => {
    // Store the original body background color
    const originalBackgroundColor =
      document.documentElement.style.backgroundColor;

    // Set the new background color when the component mounts
    document.documentElement.style.backgroundColor =
      'var(--swatches-background-color)'; // Replace '#yourDesiredColor' with your chosen color

    // Reset to the original background color when the component unmounts
    return () => {
      document.documentElement.style.backgroundColor = originalBackgroundColor;
    };
  }, []); // The empty array ensures this effect runs only once when the component mounts

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.iframe}>
        <iframe
          src="https://chromatic-factory.vercel.app/4"
          className={styles.container}
        />
      </div>
      <Footer />
    </div>
  );
};

export default swatches;
