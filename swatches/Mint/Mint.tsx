import { RiExternalLinkFill } from '@remixicon/react';
import styles from './Mint.module.scss';
import classNames from 'classnames';
import { JvmiHandle } from '../../components/JvmiHandle/JvmiHandle';
import { socialLinks } from '../../components/Mobile/Footer/Socials';
import Image from 'next/image';

const Mint = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>minting soon</h1>
      {/* <p className={styles.description}>to qualify for the mintlist:</p> */}
      <a
        href={'https://opensea.io/collection/swatches-by-jvmi/overview'}
        target="_blank"
        className={classNames(styles.button, styles.form)}
      >
        view on opensea
      </a>
      <a
        href={'https://warpcast.com/~/channel/swatches'}
        target="_blank"
        className={classNames(styles.button, styles.farcaster)}
      >
        join /swatches on farcaster
      </a>
      <a
        href={socialLinks.x}
        target="_blank"
        className={classNames(styles.button, styles.x)}
      >
        follow <JvmiHandle /> on X
      </a>

      {/* <p className={styles.description}>
        <span>not on farcaster?</span>{' '}
        <a href="" target="_blank" className={styles.formLink}>
          fill out this form{' '}
          <RiExternalLinkFill
            size={16}
            style={{ display: 'inline', marginBottom: '4px' }}
          />
        </a>
      </p> */}

      <div className={styles.mintDetails}>
        <div>
          <p className={styles.title}>supply:</p>
          <p className={styles.info}>7,777 swatches</p>
        </div>
        <div>
          <p className={styles.title}>mint passes + presale</p>
          <p className={styles.info}>4.4.24 @ 12pm pst</p>
        </div>
        <div>
          <p className={styles.title}>public drop</p>
          <p className={styles.info}>4.5.24 @ 12pm pst</p>
        </div>
      </div>

      <p className={classNames(styles.description, styles.comment)}>
        mint passes will be awarded to active community members
      </p>
    </div>
  );
};

export { Mint };
