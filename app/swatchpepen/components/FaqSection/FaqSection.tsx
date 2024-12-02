import styles from '@/app/swatchpepen/components/FaqSection/FaqSection.module.scss';

import { FaqItem } from '@/components/FaqItem/FaqItem';

const FaqSection = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>more info</h2>
      <FaqItem
        question="what is the opepen project?"
        answer={[
          'The opepen project is a collection of 10000 unique NFTs on the Ethereum blockchain.',
          'Each NFT is a unique color palette that can be used in your projects.',
        ]}
      />
      <FaqItem
        question="How many NFTs are there?"
        answer={['There are 10000 unique NFTs in the collection.']}
      />
      <FaqItem question="How much does it cost?" answer={['Each NFT costs 0.05 ETH.']} />
    </div>
  );
};

export { FaqSection };
