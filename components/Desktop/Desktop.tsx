import React, { useContext, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Desktop.module.scss';
import Header from './Header';
import Dock from './Dock';
import Window from './Window';
import { Widgets } from './Widgets';
import { useWindowSize } from 'react-use';
import { Button } from '../ui/button';
import { JvmiIcon } from '../../icons/JvmiIcon';
import DesktopContext from '../../context/DesktopContext';
import { on } from 'events';

function Desktop() {
  const constraintsRef = useRef(null);

  const { width, height } = useWindowSize();
  const { openWindows, onWindowClicked, closeWindow } = useContext(DesktopContext);

  const windowWidth = width * 0.8;
  const windowHeight = height * 0.7;

  const windowVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      transform: 'translate(calc(-50% - 60px), -20%)'
    },
    show: {
      opacity: 1,
      scale: 1,
      transform: 'translate(calc(-50% - 60px), -50%)',
      transition: {
        duration: 0.9,
        type: 'spring',
        bounce: 0.3,
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transform: 'translate(calc(-50% - 60px), -20%)',
      transition: {
        duration: 0.9,
        type: 'spring',
        bounce: 0.3,
        delay: 0
      }
    }
  };

  return (
    <div className={styles.dimmension}>
      <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Header />
        <div ref={constraintsRef} className={styles.content}>
          <div className={styles.jvmi}>
            <JvmiIcon color='white' width={200} height={200} />
          </div>
          <Widgets />

          {openWindows.map((window) => (
            <motion.div key={window.urlLabel} style={{ zIndex: openWindows.findIndex((currentWindow) => currentWindow.urlLabel === window.urlLabel) }} className={styles.windowWrapper} variants={windowVariants} initial='hidden' animate='show' exit='exit'>
              <Window
                onClick={() => {
                  onWindowClicked(window);
                }}
                onDragStart={() => {
                  onWindowClicked(window);
                }}
                windowHeight={window.windowHeight ? window.windowHeight : windowHeight}
                windowWidth={window.windowWidth ? window.windowWidth : windowWidth}
                constraintsRef={constraintsRef}
                onClose={() => {
                  closeWindow(window);
                }}
              >
                {window.content}
              </Window>
            </motion.div>
          ))}
        </div>
        <Dock />
      </motion.div>
    </div>
  );
}

export default Desktop;
