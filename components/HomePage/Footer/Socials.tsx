import styles from './Footer.module.scss';
import { DraftIcon } from '../../../icons/DraftIcon';
import { FarcasterIcon } from '../../../icons/FarcasterIcon';
import { GithubIcon } from '../../../icons/GithubIcon';
import { InstagramIcon } from '../../../icons/InstagramIcon';
import { XIcon } from '../../../icons/XIcon';
import { ZoraIcon } from '../../../icons/ZoraIcon';
import classNames from 'classnames';
import { socialLinks } from '../../../constants';

const Socials = () => {
  return (
    <div className={styles.iconContainer}>
      <a
        className={classNames(styles.iconLink, styles.x)}
        href={socialLinks.x}
        target="_blank"
        rel="noreferrer"
      >
        <XIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.instagram)}
        href={socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <InstagramIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.farcaster)}
        href={socialLinks.farcaster}
        target="_blank"
        rel="noreferrer"
      >
        <FarcasterIcon height={48} width={48} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.github)}
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.blog)}
        href={socialLinks.blog}
        target="_blank"
        rel="noreferrer"
      >
        <DraftIcon height={40} width={40} color={'currentColor'} />
      </a>
      <a
        className={classNames(styles.iconLink, styles.zora)}
        href={socialLinks.zora}
        target="_blank"
        rel="noreferrer"
      >
        <ZoraIcon height={40} width={40} color={'currentColor'} />
      </a>
    </div>
  );
};

export { Socials };
