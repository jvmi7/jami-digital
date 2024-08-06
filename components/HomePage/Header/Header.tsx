import { useState } from 'react';
import styles from './Header.module.scss';
import MenuButton from './MenuButton';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { SlidingMenu } from './SlidingMenu';
import { motion } from 'framer-motion';
import { useWindowSize } from 'react-use';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const { height } = useWindowSize();
  const isSmall = height < 750;
  const transitionDelay = isSmall ? 0.6 : 0.6;

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, top: 0, position: 'fixed' }}
      animate={{ opacity: 1, top: 0, position: 'fixed' }}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      <MenuButton isOpen={isOpen} onClick={handleMenuClick} />
      <div className={styles.logo}>
        <JvmiIcon color="var(--foreground)" height={48} width={56} />
      </div>
      {/* <ThemeToggle /> */}
      <SlidingMenu isOpen={isOpen} closeMenu={handleMenuClick} />
    </motion.div>
  );
};

export { Header };
