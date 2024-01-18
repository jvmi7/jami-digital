import { GithubIcon } from '../../../icons/GithubIcon';
import { InstagramIcon } from '../../../icons/InstagramIcon';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { XIcon } from '../../../icons/XIcon';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.contentContainer}>
        <JvmiIcon height={80} width={80} color={'white'} />
        <div className={styles.iconContainer}>
          <GithubIcon height={40} width={40} color={'white'} />
          <XIcon height={40} width={40} color={'white'} />
          <InstagramIcon height={40} width={40} color={'white'} />
          <GithubIcon height={40} width={40} color={'white'} />
          <XIcon height={40} width={40} color={'white'} />
          <InstagramIcon height={40} width={40} color={'white'} />
        </div>
      </div>
    </div>
  );
};

export { Footer };
