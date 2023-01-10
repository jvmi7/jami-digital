import styles from './Gameboy.module.scss';
import { motion } from 'framer-motion';

function Gameboy() {
  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <div className={styles.screen}></div>
      <div className={styles.buttonContainer}></div>
    </motion.div>
  );
}

export default Gameboy;
