import { motion } from 'framer-motion';

import { FaqItem } from '@/components/FaqItem/FaqItem';
import { externalLinks } from '@/constants';
import { getAnimationProps } from '@/constants/animations';
import styles from '@/swatches/FaqSection/FaqSection.module.scss';

const FaqSection = () => {
  return (
    <motion.div className={styles.container}>
      <motion.h2 className={styles.title} {...getAnimationProps(0)}>
        frequently asked questions
      </motion.h2>
      <FaqItem
        question="how do i purchase a swatch?"
        answer={[
          'the public mint of the collection is sold out, but you can purchase a swatch from any of these marketplaces:',
          <a
            href={externalLinks.opensea}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'underline',
            }}
            key="opensea"
          >
            swatches on opensea
          </a>,
          <a
            href={externalLinks.magiceden}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'underline',
            }}
            key="magiceden"
          >
            swatches on magic eden
          </a>,
        ]}
      />
      <FaqItem
        question="how many pieces in the collection?"
        answer={['there are 7,777 unique art pieces in the swatches collection']}
      />
      <FaqItem
        question='what is the difference between "classic" and "custom"?'
        answer={[
          'classic swatches are generative art pieces with a pre-defined palette',
          'custom swatches are put together by hand, with a custom palette',
        ]}
      />
      <FaqItem
        question="how many custom swatches are there?"
        answer={[
          'there are a total of 100 custom swatches in the collection',
          <a
            href={
              'https://opensea.io/collection/swatches-by-jvmi?search[stringTraits][0][name]=style&search[stringTraits][0][values][0]=custom'
            }
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'underline',
            }}
            key="custom-swatches"
          >
            check them out here
          </a>,
        ]}
      />
      <FaqItem
        question="how did you create swatches?"
        answer={[
          'the collection was created using a custom generative art algorithm',
          'in order for each item to be interactive, an interface renders the art using the animation_url field of the nft metadata',
          'swatches is deployed on the base L2 network',
        ]}
      />
    </motion.div>
  );
};

export { FaqSection };
