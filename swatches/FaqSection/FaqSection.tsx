import { motion } from 'framer-motion';

import { FaqItem } from '@/components/FaqItem/FaqItem';
import { getAnimationProps } from '@/constants/animations';
import styles from '@/swatches/FaqSection/FaqSection.module.scss';

const FaqSection = () => {
  return (
    <motion.div className={styles.container}>
      <motion.h2 className={styles.title} {...getAnimationProps(0)}>
        frequently asked questions
      </motion.h2>
      <FaqItem
        question='what is "Opepen"?'
        answer={[
          '"Opepen" is an early manifestation of a digital museum - an open art protocol inviting participation from anyone.',
          'collectors of 16,000 cryptographic tokens form consensus on the artwork for the permanent collection.',
        ]}
      />
      <FaqItem
        question='what is "swatchpepen"?'
        answer={[
          '"swatchpepen" is my contribution to the opepen project-- a living collaboration between swatches and opepen.',
        ]}
      />
      <FaqItem question="how many items are there?" answer={['there are 80 items in the set']} />
      <FaqItem
        question="wen swatchpepen?"
        answer={[
          'we are still waiting for the opepen.art site to support interactive sets on the curate page',
          'once this is working the set will be submitted & opepen collectors will be able to curate',
        ]}
      />
    </motion.div>
  );
};

export { FaqSection };
