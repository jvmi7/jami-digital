import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from '@/components/Button/Button.module.scss';
import { buttonHoverScale, buttonTransition, buttonVariants } from '@/constants/animations';
interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  isIcon?: boolean;
  onClick?: () => void;
  hoverScale?: number;
}

const Button = ({ variant, children, isIcon, onClick, hoverScale }: ButtonProps) => {
  const hoveredScale = hoverScale ? hoverScale : isIcon ? 1.1 : buttonHoverScale;

  return (
    <motion.div
      className={classNames(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary
      )}
      style={{ padding: isIcon ? '8px' : '8px 22px' }}
      variants={buttonVariants(hoveredScale)}
      transition={buttonTransition}
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Button;
