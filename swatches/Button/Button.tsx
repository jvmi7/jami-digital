import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from '@/swatches/Button/Button.module.scss';

interface ButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  isIcon?: boolean;
  onClick?: () => void;
}

const Button = ({ variant, children, isIcon, onClick }: ButtonProps) => {
  const hoveredScale = isIcon ? 1 : 1.05;
  const variants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: hoveredScale,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15,
      },
    },
  };
  return (
    <motion.div
      className={classNames(
        styles.button,
        variant === 'primary' && styles.primary,
        variant === 'secondary' && styles.secondary
      )}
      style={{ padding: isIcon ? '8px' : '8px 22px' }}
      variants={variants}
      whileHover="hover"
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Button;
