import styles from './SwatchImagePreview.module.scss';

const SwatchImagePreview = ({ imgUrl }: { imgUrl: string }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="swatch" />
    </div>
  );
};

export { SwatchImagePreview };
