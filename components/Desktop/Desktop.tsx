import React, { useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Desktop.module.scss';
import Header from './Header';
import Dock from './Dock';
import Window from './Window';
import { Widgets } from './Widgets';
import { useWindowSize } from 'react-use';
import { JvmiIcon } from '../../icons/JvmiIcon';
import DesktopContext from '../../context/DesktopContext';

function Desktop() {
  const constraintsRef = useRef(null);

  const { width, height } = useWindowSize();
  const { openWindows, onWindowClicked, closeWindow } = useContext(DesktopContext);

  const windowWidth = width * 0.925;
  const windowHeight = height * 0.75;

  return (
    <div className={styles.dimmension}>
      <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Header />
        <div ref={constraintsRef} className={styles.content}>
          <div className={styles.jvmi}>
            <JvmiIcon color='white' width={200} height={200} />
          </div>
          <Widgets />
          <AnimatePresence>
            {openWindows.map((window) => {
              return (
                <div key={window.urlLabel}>
                  <Window
                    urlLabel={window.urlLabel}
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
                    zIndex={openWindows.findIndex((currentWindow) => currentWindow.urlLabel === window.urlLabel)}
                  >
                    {window.content}
                  </Window>
                </div>
              );
            })}
          </AnimatePresence>
        </div>
        <Dock />
      </motion.div>
    </div>
  );
}

export default Desktop;
