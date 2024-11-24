import classNames from 'classnames';
import styles from './Widgets.module.scss';
import { useContext, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import DesktopContext from '../../context/DesktopContext';
import { desktopWindows } from '../../constants';

const Widget = ({
  children,
  className,
  label,
  index,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  label: string;
  index: number;
  onClick: () => void;
}) => {
  const animationDelay = index * 0.1;

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { delay: animationDelay + 0.5 } },
  };

  return (
    <motion.div
      onClick={onClick}
      variants={variants}
      initial="hidden"
      animate={'visible'}
      className={styles.widgetContainer}
    >
      <div className={classNames(styles.widgetItem, className)}>{children}</div>
      <div className={styles.label}>{label}</div>
    </motion.div>
  );
};

const Widgets = () => {
  const { openWindow } = useContext(DesktopContext);

  return (
    <div className={styles.container}>
      <Widget
        onClick={() => {
          openWindow(desktopWindows.motorheadz);
        }}
        label="motorheadz"
        className={styles.motorheadz}
        index={1}
      >
        <Image src="/motorheadz-icon.png" alt="motorheadz icon" width={80} height={80} />
      </Widget>
      <Widget
        onClick={() => {
          openWindow(desktopWindows.machiMarket);
        }}
        label="machi.market"
        className={styles.machiMarket}
        index={2}
      >
        <Image src="/machi-market-icon.svg" alt="machi market icon" width={100} height={100} />
      </Widget>
      <Widget
        onClick={() => {
          openWindow(desktopWindows.swatches);
        }}
        label="swatches"
        className={styles.swatches}
        index={3}
      >
        <Image src="/swatches-icon.svg" alt="swatches icon" width={85} height={85} />
      </Widget>
    </div>
  );
};

export { Widgets };
