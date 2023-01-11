import styles from './Dpad.module.scss';
import Image from 'next/image';

function Dpad() {
  const dpadButton = <Image src='/arrow.svg' alt='Arrrow' className={styles.arrow} width={14} height={14} priority />;
  return (
    <div className={styles.container}>
      <Image src='/dpad.svg' alt='Dpad background' className={styles.dpadBackground} width={180} height={180} priority />
      <button className={styles.top}>{dpadButton}</button>
      <button className={styles.bottom}>{dpadButton}</button>
      <button className={styles.right}>{dpadButton}</button>
      <button className={styles.left}>{dpadButton}</button>
    </div>
  );
}

const DpadButton = () => {
  return <button className={styles.dpadButton}></button>;
};

export default Dpad;
