import { ImageCarousel } from '../../ImageCarousel/ImageCarousel';
import { Button } from '../Button/Button';
import styles from './ArtworkSection.module.scss';

const ArtworkSection = () => {
  const motorheadzImages = [];
  for (let i = 1; i <= 10; i++) {
    motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>artwork</h1>
      <p className={styles.subtitle}>[ my nft art collections ]</p>
      <div className={styles.carouselContainer}>
        <ImageCarousel images={motorheadzImages} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h3 className={styles.projectTitle}>motorheadz</h3>
          <p className={styles.projectSubtitle}>
            pixelated avatars rooted in nostalgia
          </p>
        </div>
        <Button>view collection</Button>
      </div>
    </div>
  );
};

export { ArtworkSection };
