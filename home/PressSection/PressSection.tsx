import { RiArrowRightUpFill, RiArrowRightUpLine } from '@remixicon/react';
import styles from './PressSection.module.scss';

const links = [
  {
    title: 'OpenSea featured artist',
    description: 'a deep dive into my creative endeavors',
    link: 'https://opensea.io/blog/articles/in-conversation-with-jvmi',
    image: '/opensea.png',
  },
  {
    title: 'GENERAT3D w/ Shillr',
    description: 'a conversation about generative art',
    link: 'https://twitter.com/i/spaces/1ypKdkYnLZgxW',
    image: '/shillr.jpg',
  },
  {
    title: 'Invest in music podcast',
    description: 'an interview with Coopahtroopah',
    link: 'https://app.spinamp.xyz/track/ep-56-jvmi-1713564451000',
    image: '/invest-in-music.jpg',
  },
];

const PressSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>press</h1>

      <div className={styles.contentContainer}>
        {links.map(({ title, description, link, image }) => (
          <a key={title} href={link} target="_blank" className={styles.link}>
            <RiArrowRightUpLine size={24} className={styles.icon} />
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.wrapper}>
              <div className={styles.linkTitle}>{title}</div>
              <p className={styles.linkDescription}>{description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export { PressSection };
