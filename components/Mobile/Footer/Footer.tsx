import { JvmiIcon } from '../../../icons/JvmiIcon';
import styles from './Footer.module.scss';
import { Socials } from './Socials';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.contentContainer}>
        <JvmiIcon height={80} width={80} color={'white'} />
        <Socials />
      </div>
    </div>
  );
};

export { Footer };
