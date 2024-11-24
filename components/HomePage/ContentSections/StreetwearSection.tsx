import { Element } from 'react-scroll';

import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { ImageCarousel } from '../../ImageCarousel/ImageCarousel';
import { Button } from '../Button/Button';

import { jamiApparel, machiMarket } from './constants';
import styles from './styles.module.scss';

const StreetwearSection = () => {
  const projects = [
    {
      title: 'machi.market',
      subtitle: 'my current brand rooted in nostalgia',
      images: machiMarket,
      element: <Element name="machi-market" />,
      button: (
        <Button href="https://www.instagram.com/machi.market/">
          enter market <ExternalLinkIcon height={20} />
        </Button>
      ),
    },
    {
      title: 'jami apparel',
      subtitle: 'illustrating the intersection between south asia and modern streetwear',
      images: jamiApparel,
      element: <Element name="jami-apparel" />,
      button: <Button disabled>SOLD OUT</Button>,
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
              {project.button}
            </div>
            {index !== projects.length - 1 && <div className={styles.divider} />}
          </div>
        </>
      ))}
    </div>
  );
};

export { StreetwearSection };
