import { AnimatedWords } from '@/app/charts/components/IntroSection/AnimatedWords';
import styles from '@/app/charts/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <ChatBubbleContainer>
          <ChatBubble align="left" variant="dark" delay={0}>
            i got kinda tired of obsessing over my portfolio every day
          </ChatBubble>
          <ChatBubble align="right" variant="grey" delay={0.2}>
            so i made art out of it instead
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
