import styles from './ProjectSection.module.scss';
import { ProjectMetadata } from '../types';
import { useState } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { RiArrowRightUpLine } from '@remixicon/react';

type Props = {
  metadata: ProjectMetadata;
};

const ProjectSection = ({ metadata }: Props) => {
  const { title, description, tags, items, buttons } = metadata;
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
        <div className={styles.buttonContainer}>
          {buttons.map((button, index) => (
            <a href={button?.link || ''} target="_blank">
              <button
                className={classNames(styles.button)}
                style={{
                  backgroundColor:
                    index === 0 ? buttonBackground : buttonBackground,
                  color: index === 0 ? buttonTextColor : buttonTextColor,
                  // border: `3px solid ${index === 0 ? buttonBackground : buttonBackground}`,
                }}
                disabled={!button.link}
              >
                {button.text}
                {button.showIcon && (
                  <RiArrowRightUpLine className={styles.icon} size={18} />
                )}
              </button>
            </a>
          ))}
        </div>

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
