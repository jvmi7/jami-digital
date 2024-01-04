import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './Window.module.scss';
import React, { forwardRef } from 'react';
import { WindowThemeType } from '../../types';

import { MinusIcon } from '../../icons/MinusIcon';
import { CloseIcon } from '../../icons/CloseIcon';
import { PlusIcon } from 'lucide-react';

interface Props {
  children: React.ReactNode;
  constraintsRef: React.MutableRefObject<null>;
  onClick?: () => void;
  onDragStart?: () => void;
  onClose?: () => void;
  zIndex: number;
  urlLabel: string;
  theme: WindowThemeType;
  containerWidth: number;
  containerHeight: number;
}

const MAX_WINDOW_WIDTH = 1400;
const MAX_WINDOW_HEIGHT = 1000;
const windowPadding = 15;
const randomWindowDistance = 10;

const Window = forwardRef<HTMLDivElement, Props>(({ children, constraintsRef, onClick, onDragStart, onClose, zIndex, urlLabel, theme, containerWidth, containerHeight }, ref: React.Ref<HTMLDivElement>) => {
  const [windowSizeState, setWindowSizeState] = useState<'full' | 'small'>('full');
  let windowHeight = Math.min(containerHeight - windowPadding, MAX_WINDOW_HEIGHT);
  let windowWidth = Math.min(containerWidth - windowPadding, MAX_WINDOW_WIDTH);
  let secondaryButtonStyles = {
    backgroundColor: theme.minimizeButtonBackground,
    border: `2px solid ${theme.minimizeButtonBorder}`,
    color: theme.minimizeButtonText
  };

  if (windowSizeState === 'small') {
    windowHeight = 300;
    windowWidth = 300;
    secondaryButtonStyles = {
      backgroundColor: theme.maximizeButtonBackground,
      border: `2px solid ${theme.maximizeButtonBorder}`,
      color: theme.maximizeButtonText
    };
  }

  const [showWindowContent, setShowWindowContent] = useState(false);

  const [windowTop, setWindowTop] = React.useState(0);
  const [windowLeft, setWindowLeft] = React.useState(0);

  useEffect(() => {
    setWindowTop(Math.floor(Math.random() * randomWindowDistance * 2) - randomWindowDistance);
    setWindowLeft(Math.floor(Math.random() * randomWindowDistance * 2) - randomWindowDistance);
  }, []);

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
  }, [ref, windowSizeState]);

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
      top: `calc(${windowTop}px + 50%)`,
      left: `calc(${windowLeft}px + 50%)`,
      x: '-50%',
      y: '-50%',
      transition: {
        duration: 0.6,
        type: 'spring',
        bounce: 0.2,
        delay: 0
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  const handleResizeClicked = () => {
    if (windowSizeState === 'full') {
      setWindowSizeState('small');
    } else {
      setWindowSizeState('full');
    }
  };

  const handleAnimationComplete = () => {
    setShowWindowContent(true);
  };

  return (
    <motion.div
      onAnimationComplete={handleAnimationComplete}
      ref={ref}
      key={urlLabel}
      variants={windowVariants}
      initial='hidden'
      animate='show'
      exit='exit'
      onDragStart={onDragStart}
      onClick={onClick}
      className={styles.container}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.4}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      style={{ height: windowHeight, width: windowWidth, zIndex: zIndex, border: `2px solid ${theme.windowBorder}`, backgroundColor: `${theme.windowBackground}` }}
    >
      <div className={styles.header}>
        <div className={styles.headerButtons} style={{ backgroundColor: theme.windowAccent }}>
          <button
            onClick={(e) => {
              e.stopPropagation(); // This will prevent the event from propagating further
              if (onClose) {
                onClose();
              }
            }}
            style={{ backgroundColor: theme.closeButtonBackground, border: `2px solid ${theme.closeButtonBorder}`, color: theme.closeButtonText }}
          >
            <span className={styles.icon}>
              <CloseIcon width={14} color={theme.closeButtonText} />
            </span>
          </button>
          <button onClick={handleResizeClicked} style={secondaryButtonStyles}>
            <span className={styles.icon}>{windowSizeState === 'full' ? <MinusIcon width={14} color={secondaryButtonStyles.color} /> : <PlusIcon width={14} color={secondaryButtonStyles.color} />}</span>
          </button>
        </div>
        <div className={styles.labelWrapper} style={{ backgroundColor: theme.windowAccent }}>
          <p className={styles.label} style={{ color: theme.urlTextColor }}>
            {urlLabel}
          </p>
        </div>
      </div>
      <div className={styles.body} style={{ borderTop: `2px solid ${theme.windowBorder}` }}>
        <div className={styles.bodyContainer} style={{ border: `2px solid ${theme.windowBorder}`, backgroundColor: theme.contentBackground }}>
          {showWindowContent && children}
        </div>
      </div>
    </motion.div>
  );
});

export default Window;
