import styles from './Header.module.scss';
import { motion } from 'framer-motion';
import { JvmiIcon } from '../../icons/JvmiIcon';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { InstagramIcon } from '../../icons/InstagramIcon';
import { XIcon } from '../../icons/XIcon';
import { MirrorIcon } from '../../icons/MirrorIcon';
import { GithubIcon } from '../../icons/GithubIcon';
import { desktopWindows } from '../../constants';
import { useContext } from 'react';
import DesktopContext from '../../context/DesktopContext';

function Header() {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.15, delay: 0.6 },
    },
  };

  return (
    <motion.div className={styles.container} initial="hidden" animate="show" variants={variants}>
      <div className={styles.header}>
        <div className={styles.left}>
          <button className={styles.logo}>
            <JvmiIcon color="#555" />
          </button>
          <ProfileDropdown />
          <SocialsDropdown />
        </div>

        <div className={styles.right}>
          <div className={styles.date}>wednesday jan 11</div>
          <div className={styles.time}>4:22 pm</div>
        </div>
      </div>
    </motion.div>
  );
}

const ProfileDropdown = () => {
  const { openWindow } = useContext(DesktopContext);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles.dropdownTrigger}>projects</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className={styles.dropdownContent}>
        <DropdownMenuLabel className={styles.dropdownLabel}>artwork</DropdownMenuLabel>
        <DropdownMenuItem
          className={styles.dropdownItem}
          onClick={() => {
            openWindow(desktopWindows.swatches);
          }}
        >
          swatches
        </DropdownMenuItem>
        <DropdownMenuItem
          className={styles.dropdownItem}
          onClick={() => {
            openWindow(desktopWindows.motorheadz);
          }}
        >
          motorheadz
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>1-1's</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className={styles.dropdownLabel}>clothing</DropdownMenuLabel>
        <DropdownMenuItem
          className={styles.dropdownItem}
          onClick={() => {
            openWindow(desktopWindows.machiMarket);
          }}
        >
          machi.market
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const SocialsDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={styles.dropdownTrigger}>socials</DropdownMenuTrigger>
      <DropdownMenuContent align="start" className={styles.dropdownContent}>
        <DropdownMenuLabel className={styles.dropdownLabel}>profiles</DropdownMenuLabel>
        <DropdownMenuItem className={styles.dropdownItem}>
          <XIcon height={16} color="currentColor" />
          <span>x.com</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>
          <InstagramIcon height={18} color="currentColor" />
          <span>instagram</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>
          <MirrorIcon height={16} color="currentColor" />
          <span>mirror.xyz</span>
        </DropdownMenuItem>
        <DropdownMenuItem className={styles.dropdownItem}>
          <GithubIcon height={18} color="currentColor" />
          <span>github</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Header;
