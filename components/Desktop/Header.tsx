import JamiLogo from '../JamiLogo';
import styles from './Header.module.scss';
import { links } from '../../constants';
import { motion } from 'framer-motion';

function Header() {
  const element = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, type: 'spring', bounce: 0.15, delay: 0.6 }
    }
  };
  return (
    <motion.div className={styles.container} initial='hidden' animate='show' variants={element}>
      <div className={styles.header}>
        <div className={styles.left}>
          <button className={styles.logo}>
            <JamiLogo height={18} width={40} />
          </button>
          <div className={styles.links}>
            {links.map((link) => (
              <a className={styles.link} href={link.href}>
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.date}>Wednesday Jan 11</div>
          <div className={styles.time}>4:22 PM</div>
        </div>
      </div>
    </motion.div>
  );
}

export default Header;
