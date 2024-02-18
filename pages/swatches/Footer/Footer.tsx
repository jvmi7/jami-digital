import { RiShareForwardFill, RiShuffleFill } from '@remixicon/react';
import Button from '../Button/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Button variant="secondary" isIcon>
        <RiShareForwardFill />
      </Button>
      <div className={styles.learnMore}>learn more</div>
      <Button variant="secondary" isIcon>
        <RiShuffleFill />
      </Button>
    </div>
  );
};

export default Footer;
