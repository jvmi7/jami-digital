import classNames from 'classnames';
import { motion } from 'framer-motion';

import styles from '@/components/ChatBubble/ChatBubble.module.scss';
import { buttonHoverScale, buttonTransition } from '@/constants/animations';

type ChatBubbleProps = {
  children: React.ReactNode;
  align: 'left' | 'right';
  variant: 'dark' | 'blue' | 'grey';
  animate?: boolean;
  delay?: number;
  triggerOnce?: boolean;
  onClick?: () => void;
  className?: string;
};

const ChatBubble = ({
  children,
  align,
  variant,
  animate = true,
  delay = 0,
  triggerOnce = true,
  onClick,
  className,
}: ChatBubbleProps) => {
  const initialPosition = align === 'left' ? -100 : 100;

  const bubbleVariants = {
    hidden: {
      opacity: 0,
      x: initialPosition,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        delay,
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: buttonHoverScale,
      transition: buttonTransition,
    },
    exit: {
      opacity: 0,
      x: initialPosition,
      scale: 0.3,
      transition: {
        duration: 0.2,
      },
    },
  };

  return animate ? (
    <motion.div
      className={classNames(styles.bubbleContainer, styles[variant], styles[align], className, {
        [styles.clickable]: !!onClick,
      })}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce }}
      variants={bubbleVariants}
      whileHover={onClick ? 'hover' : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={classNames(styles.bubbleContainer, styles[variant], styles[align], className, {
        [styles.clickable]: !!onClick,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const ChatBubbleContainer = ({
  children,
  gap = 16,
}: {
  children: React.ReactNode;
  gap?: number;
}) => {
  return (
    <div className={styles.container} style={{ gap }}>
      {children}
    </div>
  );
};

export { ChatBubble, ChatBubbleContainer };
