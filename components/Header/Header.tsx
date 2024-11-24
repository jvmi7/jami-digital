import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

import styles from '@/components/Header/Header.module.scss';
import { SlidingMenu } from '@/components/Header/SlidingMenu';
import { useTheme } from '@/context/ThemeContext';
import { JvmiIcon } from '@/icons/JvmiIcon';
import { MenuIcon } from '@/icons/MenuIcon';

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
        initial={{ opacity: 0, top: 0 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.5, delay: transitionDelay }}
      >
        <button className={styles.menuButton} onClick={handleMenuClick}>
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
