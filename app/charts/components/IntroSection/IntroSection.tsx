import styles from '@/app/charts/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

import { AnimatedWords } from './AnimatedWords';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ChatBubbleContainer>
          <ChatBubble align="left" variant="dark" delay={0}>
            take your eyes off the charts
          </ChatBubble>
          <ChatBubble align="right" variant="light" delay={0.2}>
            & discover a new perspective
          </ChatBubble>
        </ChatBubbleContainer>
      </div>

      <div className={styles.title}>
        <AnimatedWords />
      </div>
    </div>
  );
};

export { IntroSection };
