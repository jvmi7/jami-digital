import Image from 'next/image';
import styles from './Caption.module.scss';
import { CheckIcon } from '../../icons/CheckIcon';
import { WindowThemeType } from '../../types';

interface CaptionProps {
  caption: string;
  imgSize?: number;
  fontsize?: number;
  theme: WindowThemeType;
}

const Caption = ({ caption, imgSize = 30, fontsize = 14, theme }: CaptionProps) => {
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src='/avatar.png' alt='profile avatar' height={imgSize} width={imgSize} style={{ height: imgSize, width: imgSize }} />
      <div className={styles.text} style={{ fontSize: `${fontsize}px` }}>
        <span className={styles.jvmi}>
          jvmi <CheckIcon height={13} width={13} color={'#0490EA'} />{' '}
          <a className={styles.follow} target='_blank' href='https://twitter.com/jvmi_' style={{ color: theme.textSecondary }}>
            follow
          </a>
        </span>
        <span className={styles.caption}>{caption}</span>
      </div>
    </div>
  );
};

export { Caption };
