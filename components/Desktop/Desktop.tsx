import React, { useContext, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Desktop.module.scss';
import Header from './Header';
import Dock from './Dock';
import Window from './Window';
import { Widgets } from './Widgets';
import { useMeasure, useWindowSize } from 'react-use';
import { JvmiIcon } from '../../icons/JvmiIcon';
import DesktopContext from '../../context/DesktopContext';
import { Footer } from './Footer';

function Desktop() {
  const constraintsRef = useRef(null);

  const [ref, { width, height }] = useMeasure<HTMLDivElement>();
  const { openWindows, onWindowClicked, closeWindow } = useContext(DesktopContext);

  return (
    <div className={styles.dimmension}>
      <motion.div className={styles.container} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
        <Header />
        <div ref={constraintsRef} className={styles.content}>
          <div ref={ref} className={styles.refContent}>
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
                      constraintsRef={constraintsRef}
                      containerWidth={width}
                      containerHeight={height}
                      onClose={() => {
                        closeWindow(window);
                      }}
                      zIndex={openWindows.findIndex((currentWindow) => currentWindow.urlLabel === window.urlLabel)}
                      theme={window.theme}
                    >
                      {window.content}
                    </Window>
                  </div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
        {/* <Dock /> */}
        <Footer />
      </motion.div>
    </div>
  );
}

export default Desktop;
