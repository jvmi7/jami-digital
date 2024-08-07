import { Messages } from './Messages';
import { JvmiHandle } from '../../components/JvmiHandle/JvmiHandle';
import { JvmiIcon } from '../../icons/JvmiIcon';
import { PinIcon } from '../../icons/PinIcon';
import styles from './IntroSection.module.scss';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SendPlaneIcon } from '../../icons/SendPlaneIcon';
import { ArrowUpIcon } from '../../icons/ArrowUpIcon';

const IntroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [response, setResponse] = useState<string[]>([]);

  const buttonHandler = () => {
    setResponse(["let's get in touch"]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.avatar}>
            <JvmiIcon color="white" height={48} width={56} />
            <div className={styles.active} />
          </div>

          <div className={styles.headerRight}>
            <JvmiHandle fontSize={20} />
            <div className={styles.location}>
              <PinIcon height={18} width={18} color={'var(--text-secondary)'} />
              San Francisco
            </div>
          </div>
        </div>

        <div>
          <Messages response={response} />
        </div>

        <div
          className={styles.buttonContainer}
          style={{ display: response.length > 0 ? 'none' : 'flex' }}
        >
          <button ref={ref} className={styles.button} onClick={buttonHandler}>
            {inView && (
              <TypingAnimation
                text={"let's get in touch"}
                initialDelay={3600}
              />
            )}
          </button>
          <button className={styles.iconButton} onClick={buttonHandler}>
            <ArrowUpIcon height={24} width={24} color={'white'} />
          </button>
        </div>
      </div>
    </section>
  );
};

interface TypingAnimationProps {
  text: string;
  typingSpeed?: number;
  initialDelay?: number;
}

function TypingAnimation({
  text,
  typingSpeed = 50,
  initialDelay = 0,
}: TypingAnimationProps) {
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
    <div className={styles.typingText}>
      {displayedText} <div className={styles.blinkingCursor} />
    </div>
  );
}

export { IntroSection };
