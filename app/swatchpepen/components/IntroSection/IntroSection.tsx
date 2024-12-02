import styles from '@/app/swatchpepen/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ChatBubbleContainer>
        <ChatBubble align="left" variant="dark" delay={0}>
          welcome to my collaboration with the opepen community
        </ChatBubble>
        <ChatBubble align="right" variant="blue" delay={0.2}>
          interact with the artwork above, or explore the collection below
        </ChatBubble>
      </ChatBubbleContainer>
    </div>
  );
};

export { IntroSection };
