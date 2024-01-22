import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

const Button = ({ children, onClick, href, className }: ButtonProps) => {
  // Render an <a> tag if href is provided
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        className={classNames(styles.button, className)}
      >
        <div className={styles.content}>{children}</div>
      </a>
    );
  }

  // Render a <button> tag if onClick is provided
  return (
    <button className={classNames(styles.button, className)} onClick={onClick}>
      <div className={styles.content}>{children}</div>{' '}
    </button>
  );
};

export { Button };
