import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { MessagesIcon } from '../../../icons/MessagesIcon';
import { PinIcon } from '../../../icons/PinIcon';
import { Caption } from '../../Caption/Caption';
import { JvmiHandle } from '../../JvmiHandle/JvmiHandle';
import styles from './BioSection.module.scss';
import Image from 'next/image';
const BioSection = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={'/avatar.png'}
        alt="jvmi avatar"
        width={160}
        height={160}
      />
      <JvmiHandle fontSize={20} />
      <div className={styles.location}>
        <PinIcon height={22} width={22} color={'white'} />
        san francisco
      </div>
      <button className={styles.button}>
        <MessagesIcon height={22} width={22} color={'white'} />
        message
      </button>

      <div className={styles.blurb}>
        <p>
          gm & welcome to my digital art gallery
          <Image
            src={'/victory-hand-emoji.webp'}
            alt="hello"
            width={36}
            height={36}
            className={styles.emoji}
          />
          <Image
            src={'/artist-palette-emoji.webp'}
            alt="hello"
            width={36}
            height={36}
            className={styles.emoji}
          />
        </p>
        <p>
          i make nfts, design clothing & code websites as forms of creative
          expression. i've been building in web3 since 2019 & illustrating for
          10+ years.
        </p>
        <p>
          my work is largely influenced by nostalgia, graffiti & the internet.
        </p>
      </div>
    </div>
  );
};

export { BioSection };
