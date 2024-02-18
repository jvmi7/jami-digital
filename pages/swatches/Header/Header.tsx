import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { ArrowLeft } from 'lucide-react';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import Button from '../Button/Button';
import { RiAddFill, RiMoreFill, RiTwitterXFill } from '@remixicon/react';
import { FarcasterIcon } from '../../../icons/FarcasterIcon';
import { socialLinks } from '../../../components/Mobile/Footer/Socials';
import Link from 'next/link';
import { animate, exit, initial } from '../constants';
import { usePageState } from '../page-state-context';
const Header = () => {
  const { setCurrentPage } = usePageState();
  return (
    <div className={styles.container}>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button isIcon variant="secondary">
          <RiMoreFill size={20} />
        </Button>
      </motion.div>

      <motion.div
        className={styles.logo}
        initial={{ ...initial, translateX: '-50%' }}
        animate={{ ...animate, translateX: '-50%' }}
        exit={{ ...exit, translateX: '-50%' }}
      >
        <Link href="/">
          <JvmiIcon color="var(--swatches-text-color)" height={48} width={56} />
        </Link>
      </motion.div>
      <motion.div initial={initial} animate={animate} exit={exit}>
        <Button
          variant="primary"
          onClick={() => {
            setCurrentPage('mint');
          }}
        >
          mint
        </Button>
      </motion.div>
    </div>
  );
};

export default Header;
