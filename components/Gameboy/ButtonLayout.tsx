import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { useMeasure } from 'react-use';
import Button from './Button';
import styles from './ButtonLayout.module.scss';
import Dpad from './Dpad';

function ButtonLayout() {
  const [ref, { width }] = useMeasure<HTMLDivElement>();
  const speakerDimensions = width > 370 ? 100 : 80;

  const item = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.3 }
    }
  };

  return (
    <div className={classNames(styles.container, { [styles.container1]: width < 390 }, { [styles.container2]: width < 350 }, { [styles.container3]: width < 330 }, { [styles.container4]: width < 317 })} ref={ref}>
      <div className={styles.top}>
        <motion.div className={styles.left} initial='hidden' animate='show' exit='hidden' variants={item}>
          <Dpad />
        </motion.div>
        <motion.div className={styles.right} initial='hidden' animate='show' exit='hidden' variants={item}>
          <div className={styles.buttonContainer}>
            <Button />
            <Button isSecondary={true} />
          </div>
        </motion.div>
      </div>
      <motion.div className={styles.bottom} initial='hidden' animate='show' exit='hidden' variants={item}>
        <button />
        <button />
      </motion.div>
      <motion.div className={styles.speakers} initial='hidden' animate='show' exit='hidden' variants={item}>
        <Image src='/speakers.svg' alt='Speakers' width={speakerDimensions} height={speakerDimensions} priority />
      </motion.div>
    </div>
  );
}

export default ButtonLayout;
