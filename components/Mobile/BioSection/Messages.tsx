import React, { useEffect, useState } from 'react';
import styles from './Messages.module.scss';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const messages = [
  <>
    <p>
      gm. i make nfts, design clothing & code websites as forms of creative
      expression
      <Image
        src={'/fire-emoji.webp'}
        alt="hello"
        width={32}
        height={32}
        className={styles.emoji}
      />
    </p>
  </>,
  <>
    <p>
      i've been building in web3 since 2019 & illustrating for 10+ years
      <Image
        src={'/writing-hand-emoji.webp'}
        alt="hello"
        width={32}
        height={32}
        className={styles.emoji}
      />
    </p>
  </>,
  <>
    <p>
      my work revolves around nostalgia, graffiti & the internet
      <Image
        src={'/artist-palette-emoji.webp'}
        alt="hello"
        width={32}
        height={32}
        className={styles.emoji}
      />
    </p>
  </>,
];
const Messages = () => {
  const [currentMessages, setCurrentMessages] = useState<React.ReactNode[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const delay = 1600;

  useEffect(() => {
    if (inView) {
      // add the first message
      setTimeout(() => {
        setCurrentMessages([messages[0]]);
      }, delay);
      // add the second message after a delay
      setTimeout(() => {
        setCurrentMessages([messages[0], messages[1]]);
      }, delay + 1000);
      // add the third message after a delay
      setTimeout(() => {
        setCurrentMessages([messages[0], messages[1], messages[2]]);
      }, delay + 2000);
      // add the fourth message after a delay
      // setTimeout(() => {
      //   setCurrentMessages([
      //     messages[0],
      //     messages[1],
      //     messages[2],
      //   ]);
      // }, 6000);
    }
  }, [inView]);

  return (
    <div className={styles.container}>
      <p className={styles.time}>Today at 4:20pm</p>
      <div className={styles.messagesContainer}>
        <div
          className={styles.messagesContainer}
          style={{ position: 'absolute', top: 0 }}
        >
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
        <div
          style={{
            visibility: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}
        >
          {messages.map((message, index) => (
            <div className={styles.bubbleContainer}>
              <ChatBubble
                key={index}
                index={index}
                message={message}
                isLast={index === messages.length - 1}
              />
              <div className={styles.space} />
            </div>
          ))}
        </div>
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
  const maxWidth = index === 0 ? '85%' : index === 1 ? '97%' : '80%';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 1, mass: 0.2 }}
      className={styles.chatBubble}
      style={{ maxWidth: maxWidth, transformOrigin: 'bottom left' }}
    >
      {message}
    </motion.div>
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
