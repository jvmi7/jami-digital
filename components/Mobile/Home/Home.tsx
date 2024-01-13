import { Header } from '../Header/Header';
import { HelloSection } from '../HelloSection/HelloSection';
import { SplashSection } from '../SplashSection/SplashSection';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SplashSection />
      <HelloSection />
    </div>
  );
};

export { Home };
