import { RiShareForwardFill, RiShuffleFill } from '@remixicon/react';
import Button from '../Button/Button';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Button variant="secondary" isIcon>
        <RiShareForwardFill />
      </Button>
      <Button variant="secondary">learn more</Button>
      <Button variant="secondary" isIcon>
        <RiShuffleFill />
      </Button>
    </div>
  );
};

export default Footer;
