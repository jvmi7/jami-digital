import { motion } from 'framer-motion';
import styles from './Header.module.scss';
import { ArrowLeft } from 'lucide-react';
import { JvmiIcon } from '../../../icons/JvmiIcon';
import { Button } from '../../../components/Button/Button';
const Header = () => {
  const transitionDelay = 1.22;

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: -20, top: 0 }}
      animate={{ opacity: 1, y: 0, top: 0 }}
      transition={{ duration: 0.5, delay: transitionDelay }}
    >
      <button className={styles.backButton}>
        <ArrowLeft size={28} />
      </button>
      <div className={styles.logo}>
        <JvmiIcon color="var(--swatches-text-color)" height={48} width={56} />
      </div>
      <Button themeName="dark" width="fit-content">
        mint
      </Button>
    </motion.div>
  );
};

export { Header };
