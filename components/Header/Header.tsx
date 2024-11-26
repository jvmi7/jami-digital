import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import styles from '@/components/Header/Header.module.scss';
import { SlidingMenu } from '@/components/Header/SlidingMenu';
import { buttonTransition } from '@/constants/animations';
import { buttonVariants } from '@/constants/animations';
import { useTheme } from '@/context/ThemeContext';
import { JvmiIcon } from '@/icons/JvmiIcon';
import { MenuIcon } from '@/icons/MenuIcon';

interface HeaderProps {
  backgroundColor?: string;
  foregroundColor?: string;
  theme?: 'LIGHT' | 'DARK';
  button?: React.ReactNode;
  transitionDelay?: number;
}
const Header = ({
  backgroundColor = 'var(--background)',
  foregroundColor = 'var(--foreground)',
  theme,
  button,
  transitionDelay = 0.6,
}: HeaderProps) => {
  const { setTheme } = useTheme();

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

        <div className={styles.logo}>
          <motion.button
            onClick={() => {
              router.push('/');
            }}
            variants={buttonVariants(1.07)}
            transition={buttonTransition}
            whileHover="hover"
          >
            <JvmiIcon color={foregroundColor} height={48} width={56} />
          </motion.button>
        </div>

        {button}
      </motion.div>
      <SlidingMenu isOpen={isOpen} closeMenu={handleMenuClick} />
    </>
  );
};

export { Header };
