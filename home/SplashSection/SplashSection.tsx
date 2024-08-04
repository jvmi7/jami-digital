import { useEffect } from 'react';
import { InteractiveCanvas } from '../InteractiveCanvas/InteractiveCanvas';
import styles from './SplashSection.module.scss';
import { generateAllAnimations } from '../helpers';
import { palette } from '../constants';

const SplashSection = () => {
  useEffect(() => {
    generateAllAnimations(palette, document);
  }, []);

  return (
    <div className={styles.viewport}>
      <InteractiveCanvas />
    </div>
  );
};

export { SplashSection };
