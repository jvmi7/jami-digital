import React, { useRef } from 'react';
import styles from './Splash.module.scss';
import classNames from 'classnames';
import CurvedBorder from '../CurvedBorder';
import JamiLogo from '../JamiLogo';
import { motion, useDragControls } from 'framer-motion';

interface Props {
  onClick?: () => void;
}
function Splash({ onClick }: Props) {
  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1, type: 'spring' } },
    hidden: { opacity: 0, scale: 0.6, transition: { duration: 1 } }
  };

  // const controls = useDragControls();

  // function startDrag(event: any) {
  //   controls.start(event, { snapToCursor: true });
  // }
  const borders = (
    <div className={styles.borderContainer}>
      <motion.div initial='hidden' animate='visible' exit='hidden' variants={variants} className={classNames(styles.border, styles.topRight)}>
        <CurvedBorder />
      </motion.div>
      <div className={classNames(styles.border, styles.topLeft)}>
        <CurvedBorder />
      </div>
      <div className={classNames(styles.border, styles.bottomRight)}>
        <CurvedBorder />
      </div>
      <div className={classNames(styles.border, styles.bottomLeft)}>
        <CurvedBorder />
      </div>
    </div>
  );

  const constraintsRef = useRef(null);

  return (
    <main className={styles.main} onClick={onClick} ref={constraintsRef}>
      {borders}
      <motion.div drag dragConstraints={constraintsRef} dragMomentum={false} dragElastic={0} whileDrag={{ scale: 0.9 }} initial='hidden' animate='visible' exit='hidden' variants={variants}>
        <JamiLogo />
      </motion.div>
    </main>
  );
}

export default Splash;
