import { AnimatedWords } from '@/app/charts/components/IntroSection/AnimatedWords';
import styles from '@/app/charts/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ChatBubbleContainer>
          <ChatBubble align="left" variant="dark" delay={0}>
            in a world defined by price movement
          </ChatBubble>
          <ChatBubble align="right" variant="grey" delay={0.2}>
            we can't take our eyes off the charts
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
