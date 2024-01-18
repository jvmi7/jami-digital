import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { MessagesIcon } from '../../../icons/MessagesIcon';
import { PinIcon } from '../../../icons/PinIcon';
import { Caption } from '../../Caption/Caption';
import { JvmiHandle } from '../../JvmiHandle/JvmiHandle';
import styles from './BioSection.module.scss';
import Image from 'next/image';
import { Messages } from './Messages';
const BioSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          className={styles.avatar}
          src={'/avatar.png'}
          alt="jvmi avatar"
          width={80}
          height={80}
        />
        <div className={styles.headerRight}>
          <JvmiHandle fontSize={20} />
          <div className={styles.location}>
            <PinIcon height={18} width={18} color={'white'} />
            San Francisco
          </div>
        </div>
      </div>
      <Messages />
      <button className={styles.button}>
        {/* <MessagesIcon height={22} width={22} color={'white'} /> */}
        respond
      </button>
    </div>
  );
};

export { BioSection };
