import styles from '@/app/swatchpepen/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ChatBubbleContainer>
        <ChatBubble align="left" variant="dark">
          welcome to my collaboration with the opepen community
        </ChatBubble>
        <ChatBubble align="right" variant="blue">
          interact with the artwork above, or explore the collection below
        </ChatBubble>
      </ChatBubbleContainer>
    </div>
  );
};

export { IntroSection };
