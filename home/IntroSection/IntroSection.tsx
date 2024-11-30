import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { JvmiHandle } from '@/components/JvmiHandle/JvmiHandle';
import { buttonTransition, buttonVariants, getAnimationProps } from '@/constants/animations';
import styles from '@/home/IntroSection/IntroSection.module.scss';
import { Messages } from '@/home/IntroSection/Messages';
import { ArrowUpIcon } from '@/icons/ArrowUpIcon';
import { JvmiIcon } from '@/icons/JvmiIcon';
import { PinIcon } from '@/icons/PinIcon';
import Button from '@/components/Button/Button';
import { RiArrowDownLine } from '@remixicon/react';
import classNames from 'classnames';

const IntroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  const [response, setResponse] = useState<string[]>([]);

  const showTextButton = response.length === 0;

  const buttonHandler = () => {
    setResponse(["let's get in touch"]);
  };

  return (
    <motion.section className={styles.container}>
      <motion.div className={styles.card} {...getAnimationProps(0)}>
        <motion.div className={styles.header} {...getAnimationProps(1)}>
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
        </motion.div>

        <motion.div
          {...getAnimationProps(2)}
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Messages response={response} />
        </motion.div>

        <motion.div className={styles.buttonContainer} {...getAnimationProps(3)}>
          {showTextButton && (
            <button ref={ref} className={styles.button} onClick={buttonHandler}>
              {inView && <TypingAnimation text={"let's get in touch"} initialDelay={4000} />}
            </button>
          )}
          <motion.button
            className={styles.iconButton}
            onClick={buttonHandler}
            variants={buttonVariants(1.1)}
            transition={buttonTransition}
            whileHover="hover"
          >
            <RiArrowDownLine
              size={24}
              color="white"
              className={classNames(showTextButton && styles.flipped)}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
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
    <div className={styles.typingText}>
      {displayedText} <div className={styles.blinkingCursor} />
    </div>
  );
}

export { IntroSection };
