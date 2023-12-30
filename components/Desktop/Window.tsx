import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Window.module.scss';
import React, { forwardRef } from 'react';
import { WindowThemeType } from '../../types';

import { MinusIcon } from '../../icons/MinusIcon';
import { CloseIcon } from '../../icons/CloseIcon';

interface Props {
  children: React.ReactNode;
  windowHeight: number;
  windowWidth: number;
  constraintsRef: React.MutableRefObject<null>;
  onClick?: () => void;
  onDragStart?: () => void;
  onClose?: () => void;
  zIndex: number;
  urlLabel: string;
  theme: WindowThemeType;
}

const Window = forwardRef<HTMLDivElement, Props>(({ children, windowHeight, windowWidth, constraintsRef, onClick, onDragStart, onClose, zIndex, urlLabel, theme }, ref: React.Ref<HTMLDivElement>) => {
  const [windowTop, setWindowTop] = React.useState(0);
  const [windowLeft, setWindowLeft] = React.useState(0);

  const randomDiff = 3;

  useEffect(() => {
    setWindowTop(Math.floor(Math.random() * randomDiff * 2) - randomDiff);
    setWindowLeft(Math.floor(Math.random() * randomDiff * 2) - randomDiff);
  }, []);

  const windowVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: '0%',
      y: '0%',
      top: '50%',
      left: '50%'
    },
    show: {
      opacity: 1,
      scale: 1,
      top: `${windowTop + 50}%`,
      left: `${windowLeft + 50}%`,
      x: '-50%',
      y: '-50%',
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.3,
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.3,
        delay: 0
      }
    }
  };

  useEffect(() => {
    // Simulate click on mount
    const divRef = ref as React.MutableRefObject<HTMLDivElement | null>;
    if (divRef && divRef.current) {
      const clickEvent = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      });
      divRef.current.dispatchEvent(clickEvent);
    }
  }, [ref]);

  console.log(theme);

  return (
    <motion.div ref={ref} key={urlLabel} variants={windowVariants} initial='hidden' animate='show' exit='exit' onDragStart={onDragStart} onClick={onClick} className={styles.container} drag dragConstraints={constraintsRef} dragElastic={0.4} dragMomentum={false} dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }} style={{ height: windowHeight, width: windowWidth, zIndex: zIndex, border: `2px solid ${theme.windowBorder}`, backgroundColor: `${theme.windowBackground}` }}>
      <div className={styles.header}>
        <div className={styles.headerButtons} style={{ backgroundColor: theme.windowAccent }}>
          <button
            onClick={(e) => {
              e.stopPropagation(); // This will prevent the event from propagating further
              if (onClose) {
                onClose();
              }
            }}
            style={{ backgroundColor: theme.primaryButtonBackground, border: `2px solid ${theme.primaryButtonBorder}`, color: theme.primaryButtonText }}
          >
            <span className={styles.icon}>
              <CloseIcon width={14} color={theme.primaryButtonText} />
            </span>
          </button>
          {/* <button className={styles.yellow} /> */}
          <button style={{ backgroundColor: theme.secondaryButtonBackground, border: `2px solid ${theme.secondaryButtonBorder}`, color: theme.secondaryButtonText }}>
            <span className={styles.icon}>
              <MinusIcon width={14} color={theme.secondaryButtonText} />
            </span>
          </button>
        </div>
        <div className={styles.labelWrapper} style={{ backgroundColor: theme.windowAccent }}>
          <p className={styles.label} style={{ color: theme.text }}>
            {urlLabel}
          </p>
        </div>
      </div>
      <div className={styles.body} style={{ borderTop: `2px solid ${theme.windowBorder}` }}>
        <div className={styles.bodyContainer} style={{ border: `2px solid ${theme.windowBorder}`, backgroundColor: theme.contentBackground }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
});

export default Window;
