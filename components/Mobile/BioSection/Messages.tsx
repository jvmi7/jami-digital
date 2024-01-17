import React, { useEffect, useState } from 'react';
import styles from './Messages.module.scss';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const messages = [
  <>
    <p>
      gm & welcome to my digital art gallery
      <Image
        src={'/victory-hand-emoji.webp'}
        alt="hello"
        width={32}
        height={32}
        className={styles.emoji}
      />
      <Image
        src={'/artist-palette-emoji.webp'}
        alt="hello"
        width={32}
        height={32}
        className={styles.emoji}
      />
    </p>
  </>,
  <>
    <p>
      i make nfts, design clothing & code websites as forms of creative
      expression. i've been building in web3 since 2019 & illustrating for 10+
      years.
    </p>
  </>,
  <>
    <p>my work is largely influenced by nostalgia, graffiti & the internet.</p>
  </>,
];
const Messages = () => {
  const [currentMessages, setCurrentMessages] = useState<React.ReactNode[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 1,
  });

  useEffect(() => {
    if (inView) {
      // add the first message
      setCurrentMessages([messages[0]]);
      // add the second message after a delay
      setTimeout(() => {
        setCurrentMessages([messages[0], messages[1]]);
      }, 1500);
      // add the third message after a delay
      setTimeout(() => {
        setCurrentMessages([messages[0], messages[1], messages[2]]);
      }, 3000);
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <p className={styles.time}>Today at 12:23pm</p>

      <div className={styles.messagesContainer}>
        {currentMessages &&
          currentMessages.map((message, index) => (
            <div className={styles.bubbleContainer}>
              <ChatBubble
                key={index}
                index={index}
                message={message}
                isLast={index === currentMessages.length - 1}
              />
              <div className={styles.space} />
            </div>
          ))}
        {currentMessages.length < 3 && <TypingIndicator ref={ref} />}
      </div>
    </div>
  );
};

interface ChatBubbleProps {
  message: React.ReactNode;
  isLast?: boolean;
  index: number;
}
const ChatBubble = ({ index, message, isLast }: ChatBubbleProps) => {
  // const style = isLast ? { borderBottomLeftRadius: 0 } : {};

  console.log('key', index);

  const maxWidth = index === 0 ? '85%' : index === 1 ? '90%' : '80%';

  return (
    <div className={styles.chatBubble} style={{ maxWidth: maxWidth }}>
      {message}
    </div>
  );
};

interface TypingIndicatorProps {}

const TypingIndicator = React.forwardRef<HTMLDivElement, TypingIndicatorProps>(
  (props, ref) => {
    const initial = { opacity: 0.5 };
    const animate = { opacity: 1 };

    return (
      <div ref={ref} className={styles.typingIndicator}>
        {Array.from(Array(3).keys()).map((_, index) => {
          const delay = index * 0.15;

          const transition = {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 0.15 * 2,
            ease: 'easeInOut',
            delay: delay,
          };

          return (
            <motion.div
              className={styles.dot}
              initial={initial}
              animate={animate}
              transition={transition}
              key={index}
            />
          );
        })}
      </div>
    );
  }
);

export { Messages };
