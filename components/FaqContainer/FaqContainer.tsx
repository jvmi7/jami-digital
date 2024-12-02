import styles from '@/components/FaqContainer/FaqContainer.module.scss';
import { ReactNode } from 'react';

interface FaqItemProps {
  question: string;
  answers: ReactNode[];
}

const FaqItem = ({ question, answers }: FaqItemProps) => {
  return <div className={styles.item}>{question}</div>;
};

interface FaqContainerProps {
  faqs: FaqItemProps[];
}

const FaqContainer = ({ faqs }: FaqContainerProps) => {
  return <div className={styles.container}></div>;
};

export { FaqContainer, FaqItem };
