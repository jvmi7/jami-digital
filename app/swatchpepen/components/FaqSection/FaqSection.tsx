import { motion } from 'framer-motion';

import styles from '@/app/swatchpepen/components/FaqSection/FaqSection.module.scss';
import { FaqItem } from '@/components/FaqItem/FaqItem';
import { getAnimationProps } from '@/constants/animations';

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
          <a
            href="https://opepen.art"
            target="_blank"
            style={{ textDecoration: 'underline' }}
            rel="noreferrer"
            key="opepen-link"
          >
            opepen.art
          </a>,
        ]}
      />
      <FaqItem
        question='what is "swatchpepen"?'
        answer={[
          '"swatchpepen" is my contribution to the opepen project-- a living collaboration between swatches and opepen.',
        ]}
      />
      <FaqItem
        question="how many items are there?"
        answer={[
          'there are 80 items in the set',
          <>
            <p>40 chromatic</p>
            <p>20 pastel</p>
            <p>10 greyscale</p>
            <p>5 light</p>
            <p>4 dark</p>
            <p>1 spectrum</p>
          </>,
        ]}
      />
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
