import { RiArrowRightUpLine } from '@remixicon/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { buttonTransition, buttonVariants, getAnimationProps } from '@/constants/animations';
import styles from '@/home/ProjectSection/ProjectSection.module.scss';
import { ProjectMetadata } from '@/home/types';

type Props = {
  metadata: ProjectMetadata;
};

const ProjectSection = ({ metadata }: Props) => {
  const { title, description, tags, items, buttons, itemUrls } = metadata;
  const { background, card, text, buttonBackground, buttonTextColor } = metadata.theme;

  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const currentItemUrl = `${metadata.previewUrl}${itemUrls[currentItemIndex]}`;
  console.log(currentItemUrl);

  return (
    <motion.div className={styles.container} style={{ background: background }}>
      <motion.h1 className={styles.title} style={{ color: text }} {...getAnimationProps(0)}>
        {title}
      </motion.h1>
      <motion.p className={styles.description} style={{ color: text }} {...getAnimationProps(1)}>
        {description}
      </motion.p>
      <motion.div className={styles.tags} {...getAnimationProps(2)}>
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
      </motion.div>
      <div className={styles.contentContainer}>
        <motion.iframe src={currentItemUrl} className={styles.preview} {...getAnimationProps(3)} />
        <motion.div className={styles.thumbnails} {...getAnimationProps(4)}>
          {items.map(
            (item, index) =>
              currentItemIndex !== index && (
                <img
                  key={item}
                  src={`/${title}/${item}.png`}
                  alt={`${title} preview ${index}`}
                  className={styles.image}
                  onClick={() => setCurrentItemIndex(index)}
                />
              )
          )}
        </motion.div>
      </div>
      <motion.div className={styles.buttonContainer} {...getAnimationProps(5)}>
        {buttons.map((button, index) => (
          <motion.a
            href={button?.link || ''}
            target={button?.target || ''}
            rel="noreferrer"
            key={index}
            {...getAnimationProps(5 + index)}
            variants={buttonVariants(1.03)}
            transition={buttonTransition}
            whileHover="hover"
          >
            <button
              className={classNames(styles.button)}
              style={{
                backgroundColor: buttonBackground,
                color: buttonTextColor,
              }}
              disabled={!button.link}
            >
              {button.text}
              {button.showIcon && <RiArrowRightUpLine className={styles.icon} size={18} />}
            </button>
          </motion.a>
        ))}
      </motion.div>

      <motion.div className={styles.linkContainer} {...getAnimationProps(6)}>
        {metadata.socialLinks.map(({ icon, href }, index) => (
          <motion.a
            key={index} // Added a key prop here for better rendering performance
            className={styles.link}
            style={{ color: text, backgroundColor: card }}
            href={href}
            target="_blank"
            rel="noopener noreferrer" // Added for security reasons when using target="_blank"
            variants={buttonVariants(1.1)}
            transition={buttonTransition}
            whileHover="hover"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export { ProjectSection };
