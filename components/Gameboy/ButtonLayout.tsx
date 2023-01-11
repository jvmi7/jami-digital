import Image from 'next/image';
import React from 'react';
import Button from './Button';
import styles from './ButtonLayout.module.scss';
import Dpad from './Dpad';

function ButtonLayout() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.left}>
          <Dpad />
        </div>
        <div className={styles.right}>
          <div className={styles.buttonContainer}>
            <Button />
            <Button isSecondary={true} />
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <button />
        <button />
      </div>
      <Image className={styles.speakers} src='/speakers.svg' alt='Speakers' width={100} height={100} priority />
    </div>
  );
}

export default ButtonLayout;
