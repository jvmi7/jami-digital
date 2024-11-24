import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.scss';
import { JvmiIcon } from '../../icons/JvmiIcon';
import Button from '../Button/Button';
import { RiLink, RiTwitterXFill } from '@remixicon/react';
import { FarcasterIcon } from '../../icons/FarcasterIcon';
import { socialLinks } from '../../constants';
import { animate, exit, initial } from '../constants';
import { usePageState } from '../page-state-context';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';

import { ConnectWalletButton } from './ConnectWalletButton';
import { useRouter } from 'next/router';

const Header = () => {
  const { currentPage, setCurrentPage } = usePageState();

  const router = useRouter();

  return (
    <div className={styles.container}>
      <DropdownMenu modal={false}>
        <motion.div initial={initial} animate={animate} exit={exit}>
          <DropdownMenuTrigger>
            <Button isIcon variant="secondary">
              <RiLink size={20} />
            </Button>
          </DropdownMenuTrigger>
        </motion.div>
        <DropdownMenuContent className={styles.menuContent} align="start">
          <a href={socialLinks.x} target="_blank" className={styles.link} rel="noreferrer">
            <RiTwitterXFill size={18} />
            <span>x.com</span>
          </a>
          <a href={socialLinks.farcaster} target="_blank" className={styles.link} rel="noreferrer">
            <FarcasterIcon height={20} width={20} />
            <span>farcaster</span>
          </a>
        </DropdownMenuContent>
      </DropdownMenu>
      <motion.div
        className={styles.logo}
        initial={{ ...initial, translateX: '-50%' }}
        animate={{ ...animate, translateX: '-50%' }}
        exit={{ ...exit, translateX: '-50%' }}
        onClick={() => {
          router.push('/swatches');
          setCurrentPage('home');
        }}
      >
        <JvmiIcon color="var(--swatches-text-color)" height={48} width={56} />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {currentPage !== 'mint' ? (
          <motion.div
            key="mint"
            initial={initial}
            animate={{
              ...animate,
              transition: currentPage === 'home' ? { delay: 1 } : { delay: 0 },
            }}
            exit={exit}
          >
            <ConnectWalletButton />

            {/* <Button variant="primary" onClick={openConnectModal}>
              <div className={styles.connectButton}>
                connect
                <RiLink size={20} />
              </div>
            </Button> */}
          </motion.div>
        ) : (
          <motion.div
            key="exit"
            initial={initial}
            animate={{
              ...animate,
              transition: { delay: 0 },
            }}
            exit={exit}
          >
            <Button
              variant="primary"
              onClick={() => {
                router.push('/swatches');
                setCurrentPage('home');
              }}
            >
              exit
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
