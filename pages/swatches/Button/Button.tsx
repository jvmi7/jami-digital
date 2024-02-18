import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  isIcon?: boolean;
}

const Button = ({ variant, children, isIcon }: ButtonProps) => {
  return (
    <div
      className={classNames(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary
      )}
      style={{ padding: isIcon ? '8px' : '8px 22px' }}
    >
      {children}
    </div>
  );
};

export default Button;
