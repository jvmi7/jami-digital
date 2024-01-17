import React, { useState } from 'react';
import styles from './Messages.module.scss';
import Image from 'next/image';

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
  // const [currentMessages, setCurrentMessages] = useState<React.ReactNode[]>([
  //   messages[0],
  // ]);

  const currentMessages = messages;

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
  const style = isLast ? { borderBottomLeftRadius: 0 } : {};

  console.log('key', index);

  const maxWidth = index === 0 ? '85%' : index === 1 ? '90%' : '80%';

  return (
    <div className={styles.chatBubble} style={{ ...style, maxWidth: maxWidth }}>
      {message}
    </div>
  );
};

export { Messages };
