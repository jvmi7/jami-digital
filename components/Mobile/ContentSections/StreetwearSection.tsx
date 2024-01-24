import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { ImageCarousel } from '../../ImageCarousel/ImageCarousel';
import { Button } from '../Button/Button';
import { Element } from 'react-scroll';
import styles from './styles.module.scss';
import { machiMarket } from './constants';

const StreetwearSection = () => {
  const projects = [
    {
      title: 'machi.market',
      subtitle: 'my current brand rooted in nostalgia',
      images: machiMarket,
      url: 'https://opensea.io/collection/motorheadz-optimism',
      element: <Element name="machi-market" />,
    },
    {
      title: 'jami apparel',
      subtitle: 'the intersection of south asia and modern streetwear',
      images: machiMarket,
      url: 'https://opensea.io/collection/motorheadz-optimism',
      element: <Element name="jami-apparel" />,
    },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>streetwear</h1>
      <p className={styles.subtitle}>[ my clothing projects ]</p>

      {projects.map((project, index) => (
        <>
          {project.element}
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
            {index !== projects.length - 1 && (
              <div className={styles.divider} />
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export { StreetwearSection };
