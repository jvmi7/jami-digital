import styles from './ChatMessages.module.scss';

const ChatMessages = () => {
  return (
    <div className={styles.container}>
      <p className={styles.time}>today at 10:30pm</p>
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
      <ReceivedMessage />
      <SentMessage />
    </div>
  );
};

const SentMessage = () => {
  return <div className={styles.sentMessage}>sent message sent message sent message sent message sent message </div>;
};

const ReceivedMessage = () => {
  return <div className={styles.receivedMessage}>received message received message received message received message</div>;
};

export { ChatMessages };
