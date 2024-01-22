import { CircleIcon } from '../../../icons/CloseIcon copy';
import { FarcasterIcon } from '../../../icons/FarcasterIcon';
import { GithubIcon } from '../../../icons/GithubIcon';
import { InstagramIcon } from '../../../icons/InstagramIcon';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { MirrorIcon } from '../../../icons/MirrorIcon';
import { XIcon } from '../../../icons/XIcon';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.contentContainer}>
        <JvmiIcon height={80} width={80} color={'white'} />
        <div className={styles.iconContainer}>
          <XIcon height={40} width={40} color={'white'} />
          <InstagramIcon height={40} width={40} color={'white'} />
          <FarcasterIcon height={40} width={40} color={'white'} />
          <GithubIcon height={40} width={40} color={'white'} />
          <MirrorIcon height={34} width={34} color={'white'} />
          <CircleIcon height={34} width={34} color={'white'} />
        </div>
      </div>
    </div>
  );
};

export { Footer };
