import Image from 'next/image';

import styles from './Button.module.scss';

interface ButtonProps {
  isSecondary?: boolean;
  onClick?: () => void;
}
function Button({ isSecondary = false, onClick }: ButtonProps) {
  const icon = isSecondary ? '/secondaryButton.svg' : '/primaryButton.svg';
  return (
    <button className={styles.button} onClick={onClick}>
      <Image className={styles.icon} src={icon} alt="Button" width={35} height={35} priority />
    </button>
  );
}

export default Button;
