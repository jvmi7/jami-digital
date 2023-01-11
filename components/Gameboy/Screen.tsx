import classNames from 'classnames';
import JamiLogo from '../JamiLogo';
import styles from './Screen.module.scss';
import { ScreenState } from './types';

interface ScreenProps {
  screenState: ScreenState;
  menuIndex: number;
}

function Screen({ screenState, menuIndex }: ScreenProps) {
  return (
    <div className={styles.container}>
      <div className={styles.screen}>screen</div>
      <div className={styles.bottom}>
        <div className={styles.colorsContainer}>
          <div className={classNames(styles.square, styles.color1)} />
          <div className={classNames(styles.square, styles.color2)} />
          <div className={classNames(styles.square, styles.color3)} />
          <div className={classNames(styles.square, styles.color4)} />
          <div className={classNames(styles.square, styles.color5)} />
        </div>
        <div className={styles.logoContainer}>
          <JamiLogo height={40} width={100} />
        </div>
        <div className={styles.powerContainer}>
          <span>power</span>
          <div className={styles.light} />
        </div>
      </div>
    </div>
  );
}

export default Screen;
