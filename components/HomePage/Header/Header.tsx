import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import MenuButton from './MenuButton';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { SlidingMenu } from './SlidingMenu';
import { motion } from 'framer-motion';
import { useWindowScroll, useWindowSize } from 'react-use';
import { RiMenuFill } from '@remixicon/react';
import { MenuIcon } from '../../../icons/MenuIcon';

const Header = () => {
  const { height } = useWindowSize();
  const isSmall = height < 750;
  const transitionDelay = isSmall ? 0.6 : 0.6;

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY > lastScrollY) {
      // Scroll down
      setShowHeader(false);
    } else {
      // Scroll up
      setShowHeader(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  return (
    <>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, top: 0, position: 'absolute' }}
        animate={{ opacity: showHeader ? 1 : 0, top: 0, position: 'absolute' }}
        transition={{ duration: 0.5, delay: transitionDelay }}
      >
        <button className={styles.menuButton} onClick={handleMenuClick}>
          <MenuIcon color="var(--foreground)" height={36} width={36} />
        </button>

        <div className={styles.logo}>
          <JvmiIcon color="var(--foreground)" height={48} width={56} />
        </div>
      </motion.div>
      <SlidingMenu isOpen={isOpen} closeMenu={handleMenuClick} />
    </>
  );
};

export { Header };
