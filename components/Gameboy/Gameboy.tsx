import styles from './Gameboy.module.scss';
import { motion } from 'framer-motion';
import Screen from './Screen';
import { ScreenState } from './types';
import { useState } from 'react';
import ButtonLayout from './ButtonLayout';

function Gameboy() {
  const [screenState, setScreenState] = useState(ScreenState.OFF);
  const [menuIndex, setMenuIndex] = useState(0);

  return (
    <div className={styles.container}>
      <motion.div className={styles.gameboy} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <Screen menuIndex={menuIndex} screenState={screenState} />
        <ButtonLayout />
      </motion.div>
    </div>
  );
}

export default Gameboy;
