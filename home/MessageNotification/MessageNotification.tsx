import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-scroll';

import { JvmiHandle } from '@/components/JvmiHandle/JvmiHandle';
import styles from '@/home/MessageNotification/MessageNotification.module.scss';

interface MessageNotificationProps {
  hide: boolean;
  onClick: () => void;
}
const MessageNotification = ({ hide, onClick }: MessageNotificationProps) => {
  const initialYPosition = 200;

  const initial = {
    opacity: 0,
    y: initialYPosition,
  };

  const animate = {
    opacity: 1,
    y: 0,
    transition: {
      delay: 6,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  const exit = {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'ease',
    },
  };

  return (
    <Link to="intro" smooth={true} duration={500}>
      <AnimatePresence>
        {!hide && (
          <motion.div className={styles.container} initial={initial} animate={animate} exit={exit}>
            <div className={styles.right}>
              <div>
                <p className={styles.title}>new message</p>
                <div className={styles.description}>
                  from: <JvmiHandle fontSize={16} color={'var(--message-notification-text)'} />
                </div>
              </div>
            </div>

            <button className={styles.button} onClick={onClick}>
              view
            </button>

            <div className={styles.notification}>1</div>
          </motion.div>
        )}
      </AnimatePresence>
    </Link>
  );
};

export { MessageNotification };
