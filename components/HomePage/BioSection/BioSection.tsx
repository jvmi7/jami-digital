import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { MessagesIcon } from '../../../icons/MessagesIcon';
import { PinIcon } from '../../../icons/PinIcon';
import { Caption } from '../../Caption/Caption';
import { JvmiHandle } from '../../JvmiHandle/JvmiHandle';
import styles from './BioSection.module.scss';
import Image from 'next/image';
import { Messages } from './Messages';
import { SendPlaneIcon } from '../../../icons/SendPlaneIcon';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const BioSection = () => {
  const [response, setResponse] = useState<string[]>([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image
          className={styles.avatar}
          src={'/avatar.png'}
          alt="jvmi avatar"
          width={70}
          height={70}
        />
        <div className={styles.headerRight}>
          <JvmiHandle fontSize={20} />
          <div className={styles.location}>
            <PinIcon height={18} width={18} color={'white'} />
            San Francisco
          </div>
        </div>
      </div>

      <Messages response={response} />
      <button
        ref={ref}
        className={styles.button}
        onClick={() => {
          setResponse(["let's get in touch"]);
        }}
        style={{ display: response.length > 0 ? 'none' : 'flex' }}
      >
        {inView && <TypingAnimation text={"let's get in touch"} initialDelay={3600} />}
        <div className={styles.buttonIcon}>
          <SendPlaneIcon height={20} width={20} color={'white'} />
        </div>
      </button>
    </div>
  );
};

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  initialDelay?: number;
}

function TypingAnimation({ text, typingSpeed = 50, initialDelay = 0 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    // Initial delay before starting the typing animation
    const delayTimeout = setTimeout(() => {
      setStartTyping(true);
    }, initialDelay);

    return () => clearTimeout(delayTimeout);
  }, [initialDelay]);

  useEffect(() => {
    let typingTimeout: any;

    if (startTyping && displayedText.length < text.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(text.substr(0, displayedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, text, typingSpeed, startTyping]);

  return (
    <div>
      {displayedText} {!startTyping && <div className={styles.blinkingCursor} />}
    </div>
  );
}

export { BioSection };
