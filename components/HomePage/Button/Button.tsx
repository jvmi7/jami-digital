import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  href,
  className,
  disabled,
}: ButtonProps) => {
  const classnames = classNames(
    styles.button,
    className,
    disabled && styles.disabled
  );

  // Render an <a> tag if href is provided
  if (href) {
    return (
      <a href={href} target="_blank" className={classnames}>
        <div className={styles.content}>{children}</div>
      </a>
    );
  }

  // Render a <button> tag if onClick is provided
  return (
    <button className={classnames} onClick={onClick}>
      <div className={styles.content}>{children}</div>{' '}
    </button>
  );
};

export { Button };
