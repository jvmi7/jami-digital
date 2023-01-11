import React from 'react';
import { motion } from 'framer-motion';
import styles from './Desktop.module.scss';
import Header from './Header';
import Dock from './Dock';

function Desktop() {
  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <Header />
      <div className={styles.content}></div>
      <Dock />
    </motion.div>
  );
}

export default Desktop;
