import Tilt from 'react-parallax-tilt';
import { Element } from 'react-scroll';
import { useWindowSize } from 'react-use';

import { BioSection } from '../BioSection/BioSection';
import { ArtworkSection } from '../ContentSections/ArtworkSection';
import { StreetwearSection } from '../ContentSections/StreetwearSection';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { HelloSection } from '../HelloSection/HelloSection';
import SplashSection from '../SplashSection/SplashSection';

import styles from './Home.module.scss';

const Home = () => {
  const { width } = useWindowSize();
  const tiltMaxAngle = width < 500 ? 0 : 5;
  return (
    <div className={styles.container}>
      <Element name="home" />
      <Header />
      <SplashSection />
      <Element name="hello" />
      <div className={styles.infoContainer}>
        <HelloSection />
        <Tilt tiltReverse tiltMaxAngleX={tiltMaxAngle} tiltMaxAngleY={tiltMaxAngle}>
          <BioSection />
        </Tilt>
      </div>
      <div className={styles.content}>
        <Element name="artwork" />
        <ArtworkSection />
        <Element name="streetwear" />
        <StreetwearSection />
      </div>
      <Footer />
    </div>
  );
};

export { Home };
