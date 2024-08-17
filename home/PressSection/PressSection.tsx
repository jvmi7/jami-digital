import { RiArrowRightUpFill, RiArrowRightUpLine } from '@remixicon/react';
import styles from './PressSection.module.scss';

const links = [
  {
    title: 'OpenSea featured artist',
    description: 'a deep dive into my creative endeavors',
    link: 'https://opensea.io/blog/articles/in-conversation-with-jvmi',
  },
  {
    title: 'GENERAT3D w/ Shillr',
    description: 'a conversation about generative art',
    link: 'https://app.spinamp.xyz/track/ep-56-jvmi-1713564451000',
  },
  {
    title: 'Invest in music ',
    description: 'an interview with Coopahtroopah',
    link: 'https://twitter.com/i/spaces/1ypKdkYnLZgxW',
  },
];

const PressSection = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>press</h1>

      <div className={styles.contentContainer}>
        {links.map(({ title, description, link }) => (
          <a key={title} href={link} target="_blank" className={styles.link}>
            <div className={styles.linkTitle}>
              {title}
              <RiArrowRightUpLine size={24} className={styles.icon} />
            </div>
            <p className={styles.linkDescription}>{description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export { PressSection };
