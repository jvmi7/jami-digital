import { RiLink, RiTwitterXFill } from '@remixicon/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { socialLinks } from '@/constants';
import { FarcasterIcon } from '@/icons/FarcasterIcon';
import { JvmiIcon } from '@/icons/JvmiIcon';
import Button from '@/swatches/Button/Button';
import { animate, exit, initial } from '@/swatches/constants';
import { ConnectWalletButton } from '@/swatches/Header/ConnectWalletButton';
import styles from '@/swatches/Header/Header.module.scss';
import { usePageState } from '@/swatches/page-state-context';

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
