import { RiMenuFill } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWindowScroll, useWindowSize } from 'react-use';

import { useTheme } from '../../../context/ThemeContext';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { MenuIcon } from '../../../icons/MenuIcon';

import styles from './Header.module.scss';
import MenuButton from './MenuButton';
import { SlidingMenu } from './SlidingMenu';

interface HeaderProps {
  backgroundColor?: string;
  foregroundColor?: string;
  theme?: 'LIGHT' | 'DARK';
  button?: React.ReactNode;
}
const Header = ({
  backgroundColor = 'var(--background)',
  foregroundColor = 'var(--foreground)',
  theme,
  button,
}: HeaderProps) => {
  const { setTheme } = useTheme();
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
    if (theme) {
      setTheme(theme);
    }
  }, [theme]);
  const router = useRouter();

  return (
    <>
      <motion.div
        className={styles.container}
        style={{
          backgroundColor,
          color: foregroundColor,
        }}
        initial={{ opacity: 0, top: 0, position: 'absolute' }}
        animate={{ opacity: showHeader ? 1 : 0, top: 0, position: 'absolute' }}
        transition={{ duration: 0.5, delay: transitionDelay }}
      >
        <button
          className={styles.menuButton}
          onClick={handleMenuClick}
          style={
            {
              // backgroundColor: hoverColor,
            }
          }
        >
          <MenuIcon color={foregroundColor} height={36} width={36} />
        </button>

        <button
          className={styles.logo}
          onClick={() => {
            router.push('/');
          }}
        >
          <JvmiIcon color={foregroundColor} height={48} width={56} />
        </button>

        {button}
      </motion.div>
      <SlidingMenu isOpen={isOpen} closeMenu={handleMenuClick} />
    </>
  );
};

export { Header };
