import Image from 'next/image';

import { CheckIcon } from '../../icons/CheckIcon';

import styles from './JvmiHandle.module.scss';

interface Props {
  fontSize?: number;
}
const JvmiHandle = ({ fontSize = 16 }: Props) => {
  const checkHeight = fontSize;
  const emojiHeight = fontSize * 1.5;

  return (
    <div className={styles.container} style={{ gap: `${fontSize / 2}px` }}>
      <span style={{ fontSize: `${fontSize}px` }}>jvmi</span>
      <CheckIcon height={checkHeight} width={checkHeight} color={'#0490EA'} />
      <Image
        src={'/racecar_emoji.png'}
        alt="racecar"
        width={emojiHeight * 2}
        height={emojiHeight}
      />
    </div>
  );
};

export { JvmiHandle };
