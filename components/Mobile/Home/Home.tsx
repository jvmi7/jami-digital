import { Header } from '../Header/Header';
import { SplashSection } from '../SplashSection/SplashSection';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SplashSection />
    </div>
  );
};

export { Home };
