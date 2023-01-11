import classNames from 'classnames';
import { motion } from 'framer-motion';
import styles from './MenuScreen.module.scss';

interface Props {
  menuIndex: number;
}
function MenuScreen({ menuIndex }: Props) {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', bounce: 0.3 }
    }
  };

  const links = [
    {
      name: 'streetwear',
      href: '/'
    },
    {
      name: 'artwork',
      href: '/'
    },
    {
      name: 'collectibles',
      href: '/'
    },
    {
      name: 'about',
      href: '/'
    }
  ];

  return (
    <motion.div initial='hidden' animate='show' variants={container} className={styles.container}>
      <motion.h1 initial='hidden' animate='show' exit='hidden' variants={item}>
        main menu
      </motion.h1>
      {links.map((link, index) => (
        <motion.a
          href={link.href}
          target='_blank'
          className={classNames(styles.link, {
            [styles.selected]: index === menuIndex
          })}
          key={index}
          variants={item}
        >
          {link.name}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default MenuScreen;
