import styles from '@/components/ChatBubble/ChatBubble.module.scss';
import classNames from 'classnames';

type ChatBubbleProps = {
  children: React.ReactNode;
  align: 'left' | 'right';
  variant: 'dark' | 'blue' | 'grey';
};

const ChatBubble = ({ children, align, variant }: ChatBubbleProps) => {
  return (
    <div className={classNames(styles.bubbleContainer, styles[variant], styles[align])}>
      {children}
    </div>
  );
};

const ChatBubbleContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export { ChatBubble, ChatBubbleContainer };
