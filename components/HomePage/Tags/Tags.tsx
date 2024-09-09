import styles from './Tags.module.scss';

type Props = {
  tags: string[];
  backgroundColor: string;
  textColor: string;
};

const Tags = ({ tags, backgroundColor, textColor }: Props) => {
  return (
    <div className={styles.tags}>
      {tags.map(tag => (
        <div
          key={tag} // Added a key prop here for better rendering performance
          className={styles.tagContainer}
          style={{ backgroundColor: backgroundColor }}
        >
          <div className={styles.tag} style={{ color: textColor }}>
            {tag}
          </div>
        </div>
      ))}
    </div>
  );
};

export { Tags };
