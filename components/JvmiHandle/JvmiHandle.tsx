import Image from 'next/image';

import styles from '@/components/JvmiHandle/JvmiHandle.module.scss';
import { CheckIcon } from '@/icons/CheckIcon';

interface Props {
  fontSize?: number;
  color?: string;
}
const JvmiHandle = ({ fontSize = 16, color = 'var(--text-secondary)' }: Props) => {
  const checkHeight = fontSize;
  const emojiHeight = fontSize * 1.5;

  return (
    <div className={styles.container} style={{ gap: `${fontSize / 2}px` }}>
      <span style={{ fontSize: `${fontSize}px`, color: color }}>jvmi</span>
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
