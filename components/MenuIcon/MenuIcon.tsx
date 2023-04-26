import styles from './MenuIcon.module.scss';

export enum MenuIcons {
  INSTAGRAM = 'INSTAGRAM',
  CODE = 'CODE',
  BLOG = 'BLOG'
}

interface Props {
  iconType: MenuIcons;
  description: string;
}

const getIconBackground = (iconType: MenuIcons) => {
  switch (iconType) {
    case MenuIcons.INSTAGRAM:
      return '/instagram-bg.svg';
    default:
      return '';
  }
};

const getIconLogo = (iconType: MenuIcons) => {
  switch (iconType) {
    case MenuIcons.INSTAGRAM:
      return '/instagram-logo.svg';
    case MenuIcons.CODE:
      return '/key-logo.svg';
    case MenuIcons.BLOG:
      return '/question-logo.svg';
    default:
      return '';
  }
};

const blue = '#0098ff';
const yellow = '#ffd400';

function MenuIcon({ iconType, description }: Props) {
  const backgroundImage = getIconBackground(iconType);
  const backgroundColor = iconType === MenuIcons.CODE ? blue : yellow;
  const logo = getIconLogo(iconType);
  const logoStyles =
    iconType === MenuIcons.BLOG
      ? {
          borderRadius: '14px',
          backgroundColor: '#ffa400'
        }
      : {};

  return (
    <div className={styles.container}>
      <div className={styles.icon} style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: backgroundColor }}>
        <img src={logo} className={styles.logo} style={logoStyles} />
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default MenuIcon;
