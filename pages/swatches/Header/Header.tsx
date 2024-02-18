import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { ArrowLeft } from 'lucide-react';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import Button from '../Button/Button';
import { RiTwitterXFill } from '@remixicon/react';
import { FarcasterIcon } from '../../../icons/FarcasterIcon';
import { socialLinks } from '../../../components/Mobile/Footer/Socials';
const Header = () => {
  const transitionDelay = 1.22;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -20, top: 0 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      <div className={styles.socialMediaContainer}>
        <a href={socialLinks.x} target="_blank" className={styles.link}>
          <RiTwitterXFill size={20} />
        </a>

        <a href={socialLinks.farcaster} target="_blank" className={styles.link}>
          <FarcasterIcon height={24} width={24} />
        </a>
      </div>
      <div className={styles.logo}>
        <JvmiIcon color="var(--swatches-text-color)" height={48} width={56} />
      </div>
      <Button variant="primary">mint</Button>
    </motion.div>
  );
};

export default Header;
