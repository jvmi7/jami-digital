import classNames from 'classnames';
import { motion } from 'framer-motion';
import { buttonHoverScale, buttonTransition } from '@/constants/animations';

import styles from '@/components/ChatBubble/ChatBubble.module.scss';

type ChatBubbleProps = {
  children: React.ReactNode;
  align: 'left' | 'right';
  variant: 'dark' | 'blue' | 'grey';
  animate?: boolean;
  delay?: number;
  triggerOnce?: boolean;
  onClick?: () => void;
};

const ChatBubble = ({
  children,
  align,
  variant,
  animate = true,
  delay = 0,
  triggerOnce = true,
  onClick,
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
      className={classNames(styles.bubbleContainer, styles[variant], styles[align], {
        [styles.clickable]: !!onClick,
      })}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={bubbleVariants}
      viewport={{ once: triggerOnce }}
      whileInView="visible"
      whileHover={onClick ? 'hover' : undefined}
      onClick={onClick}
    >
      {children}
    </motion.div>
  ) : (
    <div
      className={classNames(styles.bubbleContainer, styles[variant], styles[align], {
        [styles.clickable]: !!onClick,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const ChatBubbleContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export { ChatBubble, ChatBubbleContainer };
