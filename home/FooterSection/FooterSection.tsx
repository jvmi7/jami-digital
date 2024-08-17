import { socialLinks } from '../../constants';
import { JvmiIcon } from '../../icons/JvmiIcon';
import styles from './FooterSection.module.scss';

const FooterSection = () => {
  const links = [
    {
      name: 'twitter/x',
      link: socialLinks.x,
    },
    {
      name: 'farcaster',
      link: socialLinks.farcaster,
    },
    {
      name: 'zora',
      link: socialLinks.zora,
    },
    {
      name: 'github',
      link: socialLinks.github,
    },
    {
      name: 'mirror',
      link: socialLinks.blog,
    },

    {
      name: 'instagram',
      link: socialLinks.instagram,
    },
  ];

  return (
    <footer className={styles.container}>
      <div className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.links}>
          <div className={styles.linksContainer}>
            {links.slice(0, 3).map(({ name, link }) => (
              <a key={name} href={link} target="_blank" className={styles.link}>
                {name}
              </a>
            ))}
          </div>
          <div className={styles.linksContainer}>
            {links.slice(3, 6).map(({ name, link }) => (
              <a key={name} href={link} target="_blank" className={styles.link}>
                {name}
              </a>
            ))}
          </div>
        </div>
        <JvmiIcon width={100} height={65} color="currentColor" />
      </div>
    </footer>
  );
};

export { FooterSection };
