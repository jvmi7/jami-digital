import classNames from 'classnames';
import { ThemeName } from '../../types';
import styles from './Button.module.scss';

interface Props {
  children: React.ReactNode;
  themeName: ThemeName;
  variant?: 'primary' | 'secondary';
  width?: string;
}

const Button = ({ children, themeName, variant = 'primary', width = '100%' }: Props) => {
  return (
    <button className={classNames(styles.button, styles[variant], styles[themeName])} style={{ width: width }}>
      {children}
    </button>
  );
};

export { Button };
