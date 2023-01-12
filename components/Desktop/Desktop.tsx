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
  const windowWidth = 450;
  const windowCenter = windowWidth / 2;

  const window1 = {
    hidden: { opacity: 0, scale: 0.8, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    show: { opacity: 1, scale: 1, top: `calc(55% - ${windowCenter}px)`, left: `calc(25% - ${windowCenter}px)`, transform: 'translate(-50%, -50%)', transition: { duration: 0.8, type: 'spring', bounce: 0.3, delay: 0 } }
  };

  const window2 = {
    hidden: { opacity: 0, scale: 0.8, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    show: { opacity: 1, scale: 1, top: `calc(40% - ${windowCenter}px)`, left: `calc(53% - ${windowCenter}px)`, transform: 'translate(-50%, -50%)', transition: { duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.1 } }
  };

  const window3 = {
    hidden: { opacity: 0, scale: 0.8, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' },
    show: { opacity: 1, scale: 1, top: `calc(60% - ${windowCenter}px)`, left: `calc(75% - ${windowCenter}px)`, transform: 'translate(-50%, -50%)', transition: { duration: 0.8, type: 'spring', bounce: 0.3, delay: 0.2 } }
  };

  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1500);
  }, []);

  const [windowStyles, setWindowStyles] = useState([{ zIndex: 1 }, { zIndex: 2 }, { zIndex: 3 }]);
  const [maxZIndex, setMaxZIndex] = useState(3);
  const updateWindowStyle = (windowIndex: number) => {
    setWindowStyles((prev) => {
      const newWindowStyles = [...prev];
      newWindowStyles[windowIndex].zIndex = maxZIndex + 1;
      return newWindowStyles;
    });
    setMaxZIndex((prev) => prev + 1);
  };

  return (
    <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <Header />
      <div ref={constraintsRef} className={styles.content}>
        {/* <motion.div variants={window} initial='hidden' animate='show' exit='hidden'> */}
        <motion.div style={windowStyles[0]} className={styles.windowWrapper} variants={window1} initial='hidden' animate='show' exit='hidden'>
          <Window
            onClick={() => {
              updateWindowStyle(0);
            }}
            onDragStart={() => {
              updateWindowStyle(0);
            }}
            windowHeight={windowWidth}
            constraintsRef={constraintsRef}
          >
            <div className={styles.windowContent}>
              <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
            </div>
          </Window>
        </motion.div>

        <motion.div style={windowStyles[1]} className={styles.windowWrapper} variants={window2} initial='hidden' animate='show' exit='hidden'>
          <Window
            onClick={() => {
              updateWindowStyle(1);
            }}
            onDragStart={() => {
              updateWindowStyle(1);
            }}
            windowHeight={windowWidth}
            constraintsRef={constraintsRef}
          >
            <div className={styles.windowContent}>
              <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
            </div>
          </Window>
        </motion.div>

        <motion.div style={windowStyles[2]} className={styles.windowWrapper} variants={window3} initial='hidden' animate='show' exit='hidden'>
          <Window
            onClick={() => {
              updateWindowStyle(2);
            }}
            onDragStart={() => {
              updateWindowStyle(2);
            }}
            windowHeight={windowWidth}
            constraintsRef={constraintsRef}
          >
            <div className={styles.windowContent}>
              <Image src='/karachi-murakami.png' alt='Karachi murakami' width={300} height={300} draggable='false' />
            </div>
          </Window>
        </motion.div>
      </div>
      <Dock />
    </motion.div>
  );
}

export default Desktop;
