import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { ImageCarousel } from '../../ImageCarousel/ImageCarousel';
import { Button } from '../Button/Button';
import { oneOfOnes } from './constants';
import styles from './styles.module.scss';
import { Element } from 'react-scroll';

type Project = {
  title: string;
  subtitle: string;
  images: string[];
  type: 'single' | 'multiple';
  url: string;
  element?: JSX.Element;
};

const motorheadzImages: any = [];
for (let i = 1; i <= 20; i++) {
  motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
}

const ArtworkSection = () => {
  const projects: Project[] = [
    {
      title: 'motorheadz',
      subtitle: 'pixelated avatars rooted in nostalgia',
      images: motorheadzImages,
      type: 'multiple',
      url: 'https://opensea.io/collection/motorheadz-optimism',
      element: <Element name="motorheadz" />,
    },
    {
      title: `1 of 1's`,
      subtitle: 'my junk drawer of drawings',
      images: oneOfOnes,
      type: 'single',
      url: 'https://zora.co/collect/zora:0x747d8db5730a4f905ec2db371dbbc563d0ab826e',
      element: <Element name="1-of-1" />,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>artwork</h1>
      <p className={styles.subtitle}>[ my digital art collections ]</p>

      {projects.map((project, index) => (
        <>
          {project.element}
          <div className={styles.project}>
            <div className={styles.carouselContainer}>
              <ImageCarousel images={project.images} type={project.type} />
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
            {index !== projects.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export { ArtworkSection };
