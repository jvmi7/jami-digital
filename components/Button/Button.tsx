import classNames from 'classnames';
import { ThemeName } from '../../types';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  themeName: ThemeName;
  variant?: 'primary' | 'secondary';
  width?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
}

const Button = ({ children, themeName, variant = 'primary', width = '100%', icon, iconPosition = 'right', href }: Props) => {
  const buttonClasses = classNames(styles.button, styles[variant], styles[themeName]);
  const contentStyle = { flexDirection: iconPosition === 'right' ? ('row-reverse' as const) : ('row' as const) };

  return href ? (
    <a href={href} className={buttonClasses} style={{ width }} target='_blank'>
      <span className={styles.content} style={contentStyle}>
        {icon && icon}
        {children}
      </span>
    </a>
  ) : (
    <button className={buttonClasses} style={{ width }}>
      <span className={styles.content} style={contentStyle}>
        {icon && icon}
        {children}
      </span>
    </button>
  );
};

export { Button };
