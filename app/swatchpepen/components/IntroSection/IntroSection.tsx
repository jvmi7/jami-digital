import styles from '@/app/swatchpepen/components/IntroSection/IntroSection.module.scss';
import { ChatBubble, ChatBubbleContainer } from '@/components/ChatBubble/ChatBubble';

const IntroSection = () => {
  return (
    <div className={styles.container}>
      <ChatBubbleContainer>
        <ChatBubble align="left" variant="dark" delay={0}>
          <a href="https://opepen.art" target="_blank" style={{ textDecoration: 'underline' }}>
            opepen
          </a>{' '}
          is a digital art museum with pieces from artists around the world
        </ChatBubble>
        <ChatBubble align="right" variant="blue" delay={0.2}>
          <i>swatchpepen</i> is my contribution, a set rooted in color, motion & interaction
        </ChatBubble>
      </ChatBubbleContainer>
    </div>
  );
};

export { IntroSection };
