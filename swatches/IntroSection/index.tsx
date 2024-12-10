import styles from '@/app/swatchpepen/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ChatBubbleContainer>
        <ChatBubble align="left" variant="dark" delay={0}>
          "swatches" is a collection exploring color, motion & interaction
        </ChatBubble>
        <ChatBubble align="right" variant="blue" delay={0.2}>
          each piece contains an endless experience for the viewer, try it out yourself below
        </ChatBubble>
      </ChatBubbleContainer>
    </div>
  );
};

export { IntroSection };
