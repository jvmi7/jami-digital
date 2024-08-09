import { useWindowSize } from 'react-use';
import styles from './ProjectSection.module.scss';
import { FarcasterIcon } from '../../icons/FarcasterIcon';

type Props = {
  theme: { background: string };
};

const ProjectSection = ({ theme }: Props) => {
  const { background } = theme;

  return (
    <div className={styles.container} style={{ background: background }}>
      <h1 className={styles.title}>swatches</h1>
      <p className={styles.description}>
        an exploration of color, motion & human interaction
      </p>
      <div className={styles.tags}>
        <div className={styles.tagContainer}>
          <div className={styles.tag}>7,777 items</div>
        </div>
        <div className={styles.tagContainer}>
          <div className={styles.tag}>base nfts</div>
        </div>
      </div>
      <div>
        <div className={styles.contentContainer}>
          <iframe
            src="https://www.swatches-animation-url.art/items/16/"
            className={styles.preview}
          />
          <div className={styles.thumbnails}>
            <img
              src="/swatches/pastel_swatch.png"
              alt="swatches"
              className={styles.image}
            />
            <img
              src="/swatches/greyscale_swatch.png"
              alt="swatches"
              className={styles.image}
            />
            <img
              src="/swatches/beach_swatch.png"
              alt="swatches"
              className={styles.image}
            />
          </div>
        </div>
        <button className={styles.button}>hey</button>
        <div className={styles.linkContainer}>
          <button className={styles.link}>
            <FarcasterIcon />
          </button>
          <button className={styles.link}>
            <FarcasterIcon />
          </button>
          <button className={styles.link}>
            <FarcasterIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export { ProjectSection };
