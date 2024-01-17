import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { ImageCarousel } from '../../ImageCarousel/ImageCarousel';
import { Button } from '../Button/Button';
import styles from './ArtworkSection.module.scss';

const ArtworkSection = () => {
  const motorheadzImages = [];
  for (let i = 1; i <= 10; i++) {
    motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
  }

  const projects = [
    {
      title: 'motorheadz',
      subtitle: 'pixelated avatars rooted in nostalgia',
      images: motorheadzImages,
      url: 'https://opensea.io/collection/motorheadz-optimism',
    },
    {
      title: 'motorheadz',
      subtitle: 'pixelated avatars rooted in nostalgia',
      images: motorheadzImages,
      url: 'https://opensea.io/collection/motorheadz-optimism',
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>artwork</h1>
      <p className={styles.subtitle}>[ my nft art collections ]</p>

      {projects.map((project, index) => (
        <div className={styles.project}>
          <div className={styles.carouselContainer}>
            <ImageCarousel images={project.images} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectSubtitle}>{project.subtitle}</p>
            </div>
            <Button href={project.url}>
              view collection <ExternalLinkIcon height={20} />
            </Button>
          </div>
          {index !== projects.length - 1 && <div className={styles.divider} />}
        </div>
      ))}
    </div>
  );
};

export { ArtworkSection };
