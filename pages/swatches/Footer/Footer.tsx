import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>share</div>
      <div className={styles.learnMore}>learn more</div>
      <div>mix</div>
    </div>
  );
};

export default Footer;
