import styles from './PageFooter.module.scss';

const PageFooter = () => {
  return (
    <div className={styles.container}>
      <a href={'https://warpcast.com/~/channel/swatches'} target="_blank">
        <span>/swatches</span> on farcaster
      </a>
    </div>
  );
};

export { PageFooter };
