import React, { useEffect, useRef, useState } from 'react';
import styles from './Messages.module.scss';
import Image from 'next/image';
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';
import { socialLinks } from '../Footer/Socials';

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

interface MessagesProps {
  response: string[];
}

const Messages = ({ response }: MessagesProps) => {
  const [currentMessages, setCurrentMessages] = useState<React.ReactNode[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showLastMessage, setShowLastMessage] = useState(false); // used to show the last message after the typing indicator
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const delay = 1600;

  useEffect(() => {
    if (inView && currentMessages.length === 0) {
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
  }, [inView, currentMessages]);

  useEffect(() => {
    if (response.length > 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setShowLastMessage(true);
      }, 2000);
    }
  }, [response]);

  const container = containerRef.current;
  if (container) {
    container.scrollTop = 100000;
  }

  return (
    <div className={styles.container}>
      <p className={styles.time}>Today at 4:20pm</p>
      <div className={styles.messagesContainer} ref={containerRef}>
        <div
          className={styles.messagesContainer}
          style={{ position: 'absolute', top: 0 }}
        >
          {currentMessages &&
            currentMessages.map((message, index) => (
              <div className={styles.bubbleContainer} key={index}>
                <ChatBubble key={index} index={index} message={message} />
                <div className={styles.space} />
              </div>
            ))}
          {currentMessages.length < 3 && <TypingIndicator ref={ref} />}
          {response?.map((message, index) => (
            <div
              key={index}
              className={styles.bubbleContainer}
              style={{ justifyContent: 'flex-end' }}
            >
              <ChatBubble
                key={index}
                index={index}
                message={message}
                isResponse
              />
              <div className={styles.space} />
            </div>
          ))}
          {isTyping && <TypingIndicator ref={ref} />}
          {showLastMessage && (
            <div className={styles.bubbleContainer}>
              <ChatBubble
                index={1}
                message={
                  <>
                    <p>
                      the best way to reach me is via dm's on x/twitter at{' '}
                      <a
                        href={socialLinks.x}
                        target="_blank"
                        style={{ color: '#0690EA' }}
                        rel="noreferrer"
                      >
                        @jvmi_
                      </a>
                      <Image
                        src={'/envelope-emoji.webp'}
                        alt="hello"
                        width={32}
                        height={32}
                        className={styles.emoji}
                      />
                    </p>
                    <p></p>
                  </>
                }
              />
              <div className={styles.space} />
            </div>
          )}
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
            <div className={styles.bubbleContainer} key={index}>
              <ChatBubble key={index} index={index} message={message} />
              <div className={styles.space} />
            </div>
          ))}
          {response?.map((message, index) => (
            <div
              key={index}
              className={styles.bubbleContainer}
              style={{ justifyContent: 'flex-end' }}
            >
              <ChatBubble
                key={index}
                index={index}
                message={message}
                isResponse
              />
              <div className={styles.space} />
            </div>
          ))}
          {isTyping && <TypingIndicator ref={ref} />}
          {showLastMessage && (
            <div className={styles.bubbleContainer}>
              <ChatBubble
                index={1}
                message={
                  <>
                    <p>
                      the best way to reach me is via dm's on x/twitter at
                      @jvmi_
                      <Image
                        src={'/envelope-emoji.webp'}
                        alt="hello"
                        width={32}
                        height={32}
                        className={styles.emoji}
                      />
                    </p>
                    <p></p>
                  </>
                }
              />
              <div className={styles.space} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

interface ChatBubbleProps {
  message: React.ReactNode;
  index: number;
  isResponse?: boolean;
}
const ChatBubble = ({ index, message, isResponse }: ChatBubbleProps) => {
  const maxWidth = index === 0 ? '85%' : index === 1 ? '97%' : '80%';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', bounce: 1, mass: 0.2 }}
      className={classNames(
        styles.chatBubble,
        isResponse && styles.responseBubble
      )}
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

TypingIndicator.displayName = 'TypingIndicator';

export { Messages };
