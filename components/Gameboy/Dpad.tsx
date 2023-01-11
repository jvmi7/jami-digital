import styles from './Dpad.module.scss';
import Image from 'next/image';
interface Props {
  downOrRightPressed: () => void;
  upOrLeftPressed: () => void;
}
function Dpad({ downOrRightPressed, upOrLeftPressed }: Props) {
  const dpadButton = <Image src='/arrow.svg' alt='Arrrow' className={styles.arrow} width={14} height={14} priority />;
  return (
    <div className={styles.container}>
      <Image src='/dpad.svg' alt='Dpad background' className={styles.dpadBackground} width={180} height={180} priority />
      <button onClick={upOrLeftPressed} className={styles.top}>
        {dpadButton}
      </button>
      <button onClick={downOrRightPressed} className={styles.bottom}>
        {dpadButton}
      </button>
      <button onClick={downOrRightPressed} className={styles.right}>
        {dpadButton}
      </button>
      <button onClick={upOrLeftPressed} className={styles.left}>
        {dpadButton}
      </button>
    </div>
  );
}

const DpadButton = () => {
  return <button className={styles.dpadButton}></button>;
};

export default Dpad;
