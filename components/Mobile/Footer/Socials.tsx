import styles from './Footer.module.scss';
import { DraftIcon } from '../../../icons/DraftIcon';
import { FarcasterIcon } from '../../../icons/FarcasterIcon';
import { GithubIcon } from '../../../icons/GithubIcon';
import { InstagramIcon } from '../../../icons/InstagramIcon';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { XIcon } from '../../../icons/XIcon';
import { ZoraIcon } from '../../../icons/ZoraIcon';
import classNames from 'classnames';

export const socialLinks = {
  x: 'https://twitter.com/jvmi_',
  instagram: 'https://www.instagram.com/jvmi.art/',
  farcaster: 'https://warpcast.com/jvmi',
  github: 'https://github.com/imranjami',
  blog: 'https://mirror.xyz/0x57D1eAE9f0972723F0e78EAF4e6C08e90565206F',
  zora: 'https://zora.co/jvmi.eth',
};

const Socials = () => {
  return (
    <div className={styles.iconContainer}>
      <a
        className={classNames(styles.iconLink, styles.x)}
        href={socialLinks.x}
        target="_blank"
      >
        <XIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.instagram)}
        href={socialLinks.instagram}
        target="_blank"
      >
        <InstagramIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.farcaster)}
        href={socialLinks.farcaster}
        target="_blank"
      >
        <FarcasterIcon height={48} width={48} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.github)}
        href={socialLinks.github}
        target="_blank"
      >
        <GithubIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.blog)}
        href={socialLinks.blog}
        target="_blank"
      >
        <DraftIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.zora)}
        href={socialLinks.zora}
        target="_blank"
      >
        <ZoraIcon height={40} width={40} color={'currentColor'} />
      </a>
    </div>
  );
};

export { Socials };
