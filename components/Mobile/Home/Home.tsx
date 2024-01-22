import { ArtworkSection } from '../ContentSections/ArtworkSection';
import { BioSection } from '../BioSection/BioSection';
import { Header } from '../Header/Header';
import { HelloSection } from '../HelloSection/HelloSection';
import SplashSection from '../SplashSection/SplashSection';
import styles from './Home.module.scss';
import { StreetwearSection } from '../ContentSections/StreetwearSection';
import { Footer } from '../Footer/Footer';
import { Element } from 'react-scroll';
import { useWindowSize } from 'react-use';
import Tilt from 'react-parallax-tilt';

const Home = () => {
  const { width } = useWindowSize();

  const DynamicBioSection =
    width < 500 ? (
      <BioSection />
    ) : (
      <Tilt tiltReverse tiltMaxAngleX={5} tiltMaxAngleY={5}>
        <BioSection />
      </Tilt>
    );
  return (
    <div className={styles.container}>
      <Header />
      <SplashSection />
      <Element name="hello" />
      <div className={styles.infoContainer}>
        <HelloSection />
        {DynamicBioSection}
      </div>
      <div className={styles.content}>
        <ArtworkSection />
        <StreetwearSection />
      </div>
      <Footer />
    </div>
  );
};

export { Home };
