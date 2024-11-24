import { RiMoonFill, RiSunFill } from '@remixicon/react';

import { Switch } from '../../components/Switch';
import { socialLinks } from '../../constants';
import { useTheme } from '../../context/ThemeContext';
import { JvmiIcon } from '../../icons/JvmiIcon';

import styles from './FooterSection.module.scss';

const FooterSection = () => {
  const { theme, setTheme } = useTheme();

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
              <a key={name} href={link} target="_blank" className={styles.link} rel="noreferrer">
                {name}
              </a>
            ))}
          </div>
          <div className={styles.linksContainer}>
            {links.slice(3, 6).map(({ name, link }) => (
              <a key={name} href={link} target="_blank" className={styles.link} rel="noreferrer">
                {name}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.logoContainer}>
          <div className={styles.themeContainer}>
            {theme === 'DARK' ? <RiSunFill size={24} /> : <RiMoonFill size={24} />}
            <Switch
              checked={theme === 'DARK'}
              onCheckedChange={() => {
                setTheme(theme === 'LIGHT' ? 'DARK' : 'LIGHT');
              }}
            />
          </div>
          <JvmiIcon width={100} height={65} color="currentColor" />
          <p>jvmi.art 2024</p>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
