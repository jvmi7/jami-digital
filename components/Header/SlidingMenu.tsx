import {
  RiArrowGoBackLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiHomeFill,
} from '@remixicon/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ChevronRightIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, useRef } from 'react';

import styles from '@/components/Header/SlidingMenu.module.scss';
import { externalLinks, socialLinks } from '@/constants';
import AbstractionsIcon from '@/icons/AbstractionsIcon';
import ChartsIcon from '@/icons/ChartsIcon';
import { CloseIcon } from '@/icons/CloseIcon';
import { SwatchesIcon } from '@/icons/SwatchesIcon';
import SwatchpepenIcon from '@/icons/SwatchpepenIcon';

interface SlidingMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

type MenuItem = 'home' | 'swatches' | 'charts' | 'abstractions' | 'swatchpepen';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordion}>
      <div className={styles.sectionHeader} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.sectionTitle}>{title}</p>
        <motion.div animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRightIcon size={16} color="currentColor" />
        </motion.div>
      </div>
      <motion.div
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: 'easeInOut' },
          opacity: { duration: 0.2 },
        }}
        style={{ overflow: 'hidden' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

const SlidingMenu: React.FC<SlidingMenuProps> = ({ isOpen, closeMenu }) => {
  const router = useRouter();
  const scrollPositionRef = useRef(0);

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

  const externalLinkIconSize = 24;
  const links = [
    { url: socialLinks.x, text: 'x/twitter' },
    { url: socialLinks.farcaster, text: 'farcaster' },
    { url: socialLinks.zora, text: 'zora' },
    { url: socialLinks.highlight, text: 'highlight' },
    { url: socialLinks.github, text: 'github' },
  ];

  useEffect(() => {
    if (isOpen) {
      scrollPositionRef.current = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollPositionRef.current}px`;
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      window.scrollTo(0, scrollPositionRef.current);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [isOpen]);

  const [hoveredItem, setHoveredItem] = useState<MenuItem | null>(null);

  const handleNavigate = (path: string) => {
    closeMenu();
    setTimeout(() => {
      router.push(path);
    }, 200);
  };

  const homeButton = (
    <button
      className={styles.menuItem}
      onClick={() => handleNavigate('/')}
      onMouseEnter={() => setHoveredItem('home')}
      onMouseLeave={() => setHoveredItem(null)}
    >
      <div className={classNames(styles.icon, styles.homeIcon)}>
        <RiHomeFill color={hoveredItem === 'home' ? '#FFA454' : 'currentColor'} />
      </div>
      <p className={styles.text}>home</p>
      <div className={styles.externalLinkIcon}>
        <RiArrowGoBackLine size={externalLinkIconSize} color="currentColor" />
      </div>
    </button>
  );

  const containerVariants = {
    open: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <>
      <motion.div
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
        className={styles.menuContainer}
      >
        <div className={styles.menu}>
          <button className={styles.closeButton} onClick={closeMenu}>
            <CloseIcon color="currentColor" />
          </button>
          <motion.div className={styles.menuItems} variants={containerVariants}>
            <motion.div variants={itemVariants}>{homeButton}</motion.div>
            <motion.div variants={itemVariants}>
              <div
                className={styles.menuItem}
                onClick={() => handleNavigate('/swatches')}
                onMouseEnter={() => setHoveredItem('swatches')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={styles.icon}>
                  <SwatchesIcon enableColor={hoveredItem === 'swatches'} />
                </div>
                <p className={styles.text}>swatches</p>
                <div className={styles.externalLinkIcon}>
                  <RiArrowRightLine size={externalLinkIconSize} color="currentColor" />
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div
                className={styles.menuItem}
                onClick={() => window.open(externalLinks.abstractionsCollection, '_blank')}
                onMouseEnter={() => setHoveredItem('abstractions')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={styles.icon}>
                  <AbstractionsIcon enableColor={hoveredItem === 'abstractions'} />
                </div>
                <p className={styles.text}>abstractions</p>
                <div className={styles.externalLinkIcon}>
                  <RiArrowRightUpLine size={externalLinkIconSize} color="currentColor" />
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div
                className={styles.menuItem}
                onClick={() => handleNavigate('/charts')}
                onMouseEnter={() => setHoveredItem('charts')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={styles.icon}>
                  <ChartsIcon enableColor={hoveredItem === 'charts'} />
                </div>
                <p className={styles.text}>charts</p>
                <div className={styles.externalLinkIcon}>
                  <RiArrowRightLine size={externalLinkIconSize} color="currentColor" />
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div
                className={styles.menuItem}
                onClick={() => handleNavigate('/swatchpepen')}
                onMouseEnter={() => setHoveredItem('swatchpepen')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className={styles.icon}>
                  <SwatchpepenIcon
                    enableColor={hoveredItem === 'swatchpepen'}
                    className={styles.swatchpepenIcon}
                  />
                </div>
                <p className={styles.text}>swatchpepen</p>
                <div className={styles.externalLinkIcon}>
                  <RiArrowRightLine size={externalLinkIconSize} color="currentColor" />
                </div>
              </div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Accordion title="socials">
                <div className={styles.menuSubItemContainer}>
                  <div className={styles.items}>
                    {links.map(link => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        className={styles.menuSubItemLink}
                        rel="noreferrer"
                      >
                        <p className={styles.menuSubItemText}>{link.text}</p>
                        <RiArrowRightUpLine
                          className={styles.externalLinkIcon}
                          size={externalLinkIconSize}
                          color="currentColor"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </Accordion>
            </motion.div>
          </motion.div>
        </div>
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
    </>
  );
};

export { SlidingMenu };
