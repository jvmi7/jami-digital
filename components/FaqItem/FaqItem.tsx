import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '@/components/FaqItem/FaqItem.module.scss';
type FaqItemProps = {
  question: string;
  answer: React.ReactNode[];
};

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ChatBubbleContainer>
      <ChatBubble align="left" variant="grey" onClick={() => setIsOpen(!isOpen)}>
        <h3>{question}</h3>
      </ChatBubble>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.answerContainer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: 'easeOut' },
              opacity: { duration: 0.1 },
            }}
          >
            {answer.map((item, index) => (
              <ChatBubble
                key={index}
                align="right"
                variant="blue"
                delay={0.1 * (index + 1)}
                triggerOnce={false}
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
