import styles from './LoadingScreen.module.scss';

function LoadingScreen() {
  return (
    <div className={styles.container}>
      <h1>
        <span>J</span>
        <span>A</span>
        <span>M</span>
        <span>I</span>
        {/* <span>B</span>
        <span>O</span>
        <span>Y</span> */}
      </h1>
    </div>
  );
}

export default LoadingScreen;
