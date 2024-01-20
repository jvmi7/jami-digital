import { AnimatePresence, motion } from 'framer-motion';
import { MessagesIcon } from '../../../icons/MessagesIcon';
import { JvmiHandle } from '../../JvmiHandle/JvmiHandle';
import styles from './MessageNotification.module.scss';

interface MessageNotificationProps {
  hide: boolean;
  onClick: () => void;
}
const MessageNotification = ({ hide, onClick }: MessageNotificationProps) => {
  const initial = {
    opacity: 0,
    y: 20,
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 4,
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const exit = {
    opacity: 0,
    // y: 20,
    transition: {
      duration: 0.2,
      ease: 'ease',
    },
  };

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          className={styles.container}
          initial={initial}
          animate={animate}
          exit={exit}
        >
          <div className={styles.right}>
            <MessagesIcon variant={1} height={40} width={40} color={'white'} />
            <div>
              <p className={styles.title}>new message</p>
              <p className={styles.description}>
                <JvmiHandle fontSize={15} />
              </p>
            </div>
          </div>
          <button className={styles.button} onClick={onClick}>
            view
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { MessageNotification };
