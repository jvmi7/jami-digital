import styles from './ThemeToggle.module.scss';

const ThemeToggle = () => {
  const height = 6;
  return (
    <div className={styles.container}>
      {Array.from({ length: height }).map((_, index) => (
        <div key={index} className={styles.circle} />
      ))}
      <div className={styles.handle} />
    </div>
  );
};

export { ThemeToggle };
