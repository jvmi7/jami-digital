import { Link } from 'react-scroll';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import styles from './Footer.module.scss';
import { Socials } from './Socials';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gradient} />
      <div className={styles.contentContainer}>
        <Link to="home" smooth duration={1000} offset={-72}>
          <JvmiIcon height={80} width={80} color={'white'} />
        </Link>

        <Socials />
      </div>
    </div>
  );
};

export { Footer };
