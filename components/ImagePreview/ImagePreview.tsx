import { motion } from 'framer-motion';

import styles from '@/components/ImagePreview/ImagePreview.module.scss';
import { getAnimationProps } from '@/constants/animations';

interface ImagePreviewProps {
  name: string;
  src: string;
  style?: React.CSSProperties;
  animationDelay?: number;
}

export const ImagePreview = ({ name, src, animationDelay = 0, style }: ImagePreviewProps) => {
  return (
    <motion.div
      className={styles.imageContainer}
      {...getAnimationProps(animationDelay)}
      style={style}
    >
      <img className={styles.image} src={src} alt={name} />
      <p className={styles.name}>{name}</p>
    </motion.div>
  );
};
