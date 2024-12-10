import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';
import styles from '@/components/FaqItem/FaqItem.module.scss';
type FaqItemProps = {
  question: React.ReactNode;
  answer: React.ReactNode[];
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const variant = isOpen ? 'dark' : 'grey';

  return (
    <ChatBubbleContainer gap={0}>
      <ChatBubble align="left" variant={variant} onClick={() => setIsOpen(!isOpen)}>
        <p className={styles.question}>{question}</p>
      </ChatBubble>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answerContainer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0, x: 100, scale: 0 }}
            transition={{
              height: { duration: 0.3, ease: 'easeOut' },
            }}
          >
            {answer.map((item, index) => (
              <ChatBubble
                key={index}
                align="right"
                variant="blue"
                delay={0.1 * (index + 1)}
                triggerOnce={true}
                className={styles.answer}
              >
                <p>{item}</p>
              </ChatBubble>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </ChatBubbleContainer>
  );
};

export { FaqItem };
