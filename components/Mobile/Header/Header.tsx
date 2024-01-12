import { useState } from 'react';
import styles from './Header.module.scss';
import MenuButton from './MenuButton';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { SlidingMenu } from './SlidingMenu';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';

const Header = () => {
  const { height } = useWindowSize();
  const isSmall = height < 750;
  const transitionDelay = isSmall ? 1.04 : 1.22;

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      <MenuButton isOpen={isOpen} onClick={handleMenuClick} />
      <div className={styles.logo}>
        <JvmiIcon color="white" height={48} width={56} />
      </div>
      <SlidingMenu isOpen={isOpen} />
    </motion.div>
  );
};

export { Header };
