// components/SlidingMenu.tsx
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styles from './SlidingMenu.module.scss';
import disableScroll from 'disable-scroll';
import { HomeIcon } from '../../../icons/HomeIcon';
import { CollageIcon } from '../../../icons/CollageIcon';
import { ShoppingCartIcon } from '../../../icons/ShoppingCartIcon';
import { Socials } from '../Footer/Socials';
import { Button } from '../Button/Button';
import { Link } from 'react-scroll';
import { CheckIcon } from '../../../icons/CheckIcon';

interface SlidingMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, closeMenu }) => {
  const variants = {
    open: {
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // Custom easing function
    },
    closed: {
      x: '-100%',
      transition: { duration: 0.2, ease: 'easeInOut' }, // Standard easing
    },
  };

  const backgroundVariants = {
    open: {
      opacity: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // Custom easing function
    },
    closed: {
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeInOut' }, // Standard easing
    },
  };

  useEffect(() => {
    if (isOpen) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [isOpen]);

  const iconSize = 32;

  return (
    <div
      className={styles.container}
      style={{ pointerEvents: isOpen ? 'all' : 'none' }}
    >
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={styles.menuContainer}
      >
        <div className={styles.menu}>
          {/* <LinkItem to="home" onClick={closeMenu}>
            <HomeIcon height={iconSize} width={iconSize} color="white" />
            <p className={styles.menuItemText}>home</p>
          </LinkItem> */}
          <LinkItem to="artwork" onClick={closeMenu}>
            <div className={styles.menuItem}>
              <CollageIcon height={iconSize} width={iconSize} color="white" />
              <p className={styles.menuItemText}>artwork</p>
            </div>
          </LinkItem>
          <div className={styles.menuSubItemContainer}>
            <div className={styles.items}>
              <LinkItem to="motorheadz" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>motorheadz</p>
              </LinkItem>
              <LinkItem to="1-of-1" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>1 of 1's</p>
              </LinkItem>
            </div>
          </div>
          <LinkItem to="streetwear" onClick={closeMenu}>
            <ShoppingCartIcon
              height={iconSize}
              width={iconSize}
              color="white"
            />
            <p className={styles.menuItemText}>streetwear</p>
          </LinkItem>
          <div className={styles.menuSubItemContainer}>
            <div className={styles.items}>
              <LinkItem to="machi-market" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>machi market</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>jami apparel</p>
              </LinkItem>
            </div>
          </div>
          <div className={styles.menuItem}>
            <CheckIcon height={iconSize} width={iconSize} color="white" />
            <p className={styles.menuItemText}>socials</p>
          </div>
          <div className={styles.menuSubItemContainer}>
            <div className={styles.items}>
              <LinkItem to="machi-market" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>x/twitter</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>instagram</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>farcaster</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>github</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>mirror.xyz</p>
              </LinkItem>
              <LinkItem to="jami-apparel" onClick={closeMenu}>
                <p className={styles.menuSubItemText}>zora</p>
              </LinkItem>
            </div>
          </div>
        </div>
        {/* <div className={styles.bottom}> */}
        {/* <Button className={styles.connectButton}>connect wallet</Button> */}
        {/* <div className={styles.footer}> */}
        {/* <Socials /> */}
        {/* </div> */}
        {/* </div> */}
      </motion.div>

      {isOpen && (
        <motion.div
          className={styles.background}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={backgroundVariants}
          onClick={closeMenu}
        />
      )}
    </div>
  );
};

interface LinkItemProps {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}

const LinkItem = ({ to, onClick, children }: LinkItemProps) => {
  return (
    <Link
      to={to}
      smooth={true}
      offset={-72}
      duration={500}
      className={styles.menuItem}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export { SlidingMenu };
