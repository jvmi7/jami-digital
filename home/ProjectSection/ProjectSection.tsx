import styles from './ProjectSection.module.scss';

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
      <iframe
        src="https://www.swatches-animation-url.art/items/16/"
        className={styles.previewContainer}
      />
    </div>
  );
};

export { ProjectSection };
