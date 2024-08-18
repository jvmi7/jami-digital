import styles from './ProjectSection.module.scss';
import { ProjectMetadata } from '../types';
import { useState } from 'react';
import Link from 'next/link';

type Props = {
  metadata: ProjectMetadata;
};

const ProjectSection = ({ metadata }: Props) => {
  const { title, description, tags, items, button } = metadata;
  const { background, card, text, buttonBackground, buttonTextColor } =
    metadata.theme;

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const currentItem = items[currentItemIndex];
  const currentItemUrl = `${metadata.previewUrl}${currentItem}/`;

  return (
    <div className={styles.container} style={{ background: background }}>
      <h1 className={styles.title} style={{ color: text }}>
        {title}
      </h1>
      <p className={styles.description} style={{ color: text }}>
        {description}
      </p>
      <div className={styles.tags}>
        {tags.map(tag => (
          <div
            key={tag} // Added a key prop here for better rendering performance
            className={styles.tagContainer}
            style={{ backgroundColor: card }}
          >
            <div className={styles.tag} style={{ color: text }}>
              {tag}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.contentContainer}>
          <iframe src={currentItemUrl} className={styles.preview} />
          <div className={styles.thumbnails}>
            {items.map(
              (item, index) =>
                currentItemIndex !== index && (
                  <img
                    key={item} // Added a key prop here for better rendering performance
                    src={`/${title}/${item}.png`}
                    alt={`${title} preview ${index}`}
                    className={styles.image}
                    onClick={() => setCurrentItemIndex(index)}
                  />
                )
            )}
          </div>
        </div>
        <Link href={button?.link || ''} target="_blank">
          <button
            className={styles.button}
            style={{
              backgroundColor: buttonBackground,
              color: buttonTextColor,
            }}
            disabled={!button.link}
          >
            {button.text}
          </button>
        </Link>

        <div className={styles.linkContainer}>
          {metadata.socialLinks.map(({ icon, href }, index) => (
            <a
              key={index} // Added a key prop here for better rendering performance
              className={styles.link}
              style={{ color: text, backgroundColor: card }}
              href={href}
              target="_blank"
              rel="noopener noreferrer" // Added for security reasons when using target="_blank"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProjectSection };
