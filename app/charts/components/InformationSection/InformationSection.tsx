import { motion } from 'framer-motion';

import styles from '@/app/charts/components/InformationSection/InformationSection.module.scss';
import { getAnimationProps } from '@/constants/animations';

interface InformationSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
  variant?: 'left' | 'right';
}

const InformationSection = ({
  title,
  description,
  children,
  variant = 'left',
}: InformationSectionProps) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          direction: variant === 'right' ? 'rtl' : 'ltr',
        }}
      >
        <div className={styles.media}>{children}</div>
        <div className={styles.copy}>
          <motion.h2 {...getAnimationProps(0)}>{title}</motion.h2>
          <motion.p {...getAnimationProps(1)}>{description}</motion.p>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
