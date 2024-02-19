import { RiExternalLinkFill } from '@remixicon/react';
import styles from './Mint.module.scss';
import classNames from 'classnames';
import { JvmiHandle } from '../../components/JvmiHandle/JvmiHandle';
import { socialLinks } from '../../components/Mobile/Footer/Socials';

const Mint = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>minting soon</h1>
      <p className={styles.description}>to qualify for the mintlist:</p>
      <a
        href={socialLinks.x}
        target="_blank"
        className={classNames(styles.button, styles.x)}
      >
        follow <JvmiHandle /> on X <RiExternalLinkFill size={16} />
      </a>
      <a
        href=""
        target="_blank"
        className={classNames(styles.button, styles.farcaster)}
      >
        join /swatches on farcaster <RiExternalLinkFill size={16} />
      </a>
      <p className={styles.description}>
        not on farcaster?{' '}
        <a href="" target="_blank" className={styles.formLink}>
          fill out this form
        </a>
      </p>

      <div className={styles.mintDetails}>
        <div>
          <p className={styles.title}>total supply:</p>
          <p className={styles.info}>5,555 swatches</p>
        </div>
        <div>
          <p className={styles.title}>mint price:</p>
          <p className={styles.info}>0.01 ETH (free if on mintlist)</p>
        </div>
      </div>
    </div>
  );
};

export { Mint };
