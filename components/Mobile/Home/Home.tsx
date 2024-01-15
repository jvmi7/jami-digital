import { BioSection } from '../BioSection/BioSection';
import { Header } from '../Header/Header';
import styles from './Home.module.scss';
import dynamic from 'next/dynamic';

const SplashSectionDynamic = dynamic(
  () => import('../SplashSection/SplashSection'),

  {
    ssr: false,
    loading: () => <div className={styles.splashLoading} />,
  }
);

const HelloSectionDynamic = dynamic(
  () => import('../HelloSection/HelloSection'),

  {
    ssr: false,
    loading: () => <div className={styles.splashLoading} />,
  }
);

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <SplashSectionDynamic />
      <HelloSectionDynamic />
      <div className={styles.content}>
        <BioSection />
      </div>

      <div className={styles.footer}></div>
    </div>
  );
};

export { Home };
