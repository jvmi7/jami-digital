import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Desktop.module.scss';
import Header from './Header';
import Dock from './Dock';
import Window from './Window';
import Image from 'next/image';

function Desktop() {
  const constraintsRef = useRef(null);
  const [render, setRender] = useState(false);

  const window = {
    hidden: { opacity: 0, scale: 0.8, x: 100, y: 100 },
    show: { opacity: 1, scale: 1, x: 0, y: 0, transition: { duration: 0.8, type: 'spring', bounce: 0.3 } }
  };

  console.log(constraintsRef);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
  }, []);

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <Header />
      <div ref={constraintsRef} className={styles.content}>
        <motion.div variants={window} initial='hidden' animate='show' exit='hidden'>
          <div className={styles.windowWrapper}>
            <Window constraintsRef={constraintsRef}>
              <div className={styles.windowContent}>
                <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
              </div>
            </Window>
          </div>

          {/* <Window constraintsRef={constraintsRef}>
            <div className={styles.windowContent}>
              <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
            </div>
          </Window>
          <Window constraintsRef={constraintsRef}>
            <div className={styles.windowContent}>
              <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
            </div>
          </Window> */}
        </motion.div>
      </div>
      <Dock />
    </motion.div>
  );
}

export default Desktop;
