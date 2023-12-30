import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './Window.module.scss';
import React, { forwardRef } from 'react';

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
}

const Window = forwardRef<HTMLDivElement, Props>(({ children, windowHeight, windowWidth, constraintsRef, onClick, onDragStart, onClose, zIndex, urlLabel }, ref: React.Ref<HTMLDivElement>) => {
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

  console.log(urlLabel);

  return (
    <motion.div ref={ref} key={urlLabel} variants={windowVariants} initial='hidden' animate='show' exit='exit' onDragStart={onDragStart} onClick={onClick} className={styles.container} drag dragConstraints={constraintsRef} dragElastic={0.4} dragMomentum={false} dragTransition={{ bounceStiffness: 400, bounceDamping: 30 }} style={{ height: windowHeight, width: windowWidth, zIndex: zIndex }}>
      <div className={styles.header}>
        <div className={styles.headerButtons}>
          <button
            onClick={(e) => {
              e.stopPropagation(); // This will prevent the event from propagating further
              if (onClose) {
                onClose();
              }
            }}
            className={styles.red}
          />
          {/* <button className={styles.yellow} /> */}
          <button className={styles.green} />
        </div>
        <div className={styles.labelWrapper}>
          <p className={styles.label}>{urlLabel}</p>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.bodyContainer}>{children}</div>
      </div>
    </motion.div>
  );
});

export default Window;
