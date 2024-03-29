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
      {/* <a
        href={socialLinks.farcaster}
        target="_blank"
        className={classNames(styles.button, styles.form)}
      >
        <Image
          src="/right-pointing-emoji.png"
          alt="left"
          width={20}
          height={20}
        />{' '}
        fill out this form
        <Image
          src="/left-pointing-emoji.png"
          alt="left"
          width={20}
          height={20}
        />{' '}
      </a> */}
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
          <p className={styles.info}>5,555 swatches</p>
        </div>
        <div>
          <p className={styles.title}>mint date:</p>
          <p className={styles.info}>TBD</p>
        </div>
      </div>

      <p className={classNames(styles.description, styles.comment)}>
        mint passes will be awarded to active community members
      </p>
    </div>
  );
};

export { Mint };
