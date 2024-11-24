import styles from './ColorfulIcon.module.scss';

type IconType = 'home' | 'swatches' | 'charts' | 'abstractions' | 'swatchpepen';

export type ColorfulIconProps = {
  icon: IconType;
  enableColor: boolean;
};

const ColorfulIcon = ({ icon, enableColor }: ColorfulIconProps) => {
  return <div className={styles.container}></div>;
};

export { ColorfulIcon };
