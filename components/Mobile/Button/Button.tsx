import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const Button = ({ children, onClick, href }: ButtonProps) => {
  // Render an <a> tag if href is provided
  if (href) {
    return (
      <a href={href} className={styles.button} target="_blank">
        <div className={styles.content}>{children}</div>
      </a>
    );
  }

  // Render a <button> tag if onClick is provided
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.content}>{children}</div>{' '}
    </button>
  );
};

export { Button };