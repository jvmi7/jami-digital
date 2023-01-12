import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './Window.module.scss';

interface Props {
  children: React.ReactNode;
  windowHeight: number;
  constraintsRef: React.MutableRefObject<null>;
  onClick?: () => void;
}
function Window({ children, windowHeight, constraintsRef, onClick }: Props) {
  return (
    <motion.div onClick={onClick} style={{ height: `${windowHeight}px`, width: `${windowHeight}px` }} className={styles.container} drag dragConstraints={constraintsRef} dragElastic={0.4} dragMomentum={false} dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }}>
      <div className={styles.header}>
        <div className={styles.headerButtons}>
          <button className={styles.red} />
          <button className={styles.yellow} />
          <button className={styles.green} />
        </div>
        <div className={styles.labelWrapper}>
          <p className={styles.label}>header.png</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyContainer}>{children}</div>
      </div>
    </motion.div>
  );
}

export default Window;
