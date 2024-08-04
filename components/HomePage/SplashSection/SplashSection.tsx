import { useWindowSize } from 'react-use';
import styles from './SplashSection.module.scss';
import Image from 'next/image';
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { MessageNotification } from '../MessageNotification/MessageNotification';
import { useEffect, useMemo, useState } from 'react';
import { jamiApparel } from '../ContentSections/constants';

const SplashSection = () => {
  const { height, width } = useWindowSize();
  const [hideNotification, setHideNotification] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 0) {
      setHideNotification(true);
    }
  });

  // Determine the number of columns based on width
  const columns = width < 800 ? 3 : width < 1000 ? 4 : 5;

  // Determine the number of rows based on height
  const rows = height < 0 ? 3 : 4;

  // Calculate total number of images to display
  const numImages = columns * rows;

  const motorheadzImages = [];
  for (let i = 1; i <= 20; i++) {
    motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
  }

  const imageGridStaggerAnimationDelay = 0.06;
  const textAnimationDelay = numImages * imageGridStaggerAnimationDelay + 0.2;

  // Variants for the individual image container
  const imageContainerVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: 100,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },

    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        spring: 0.5,
      },
    },
  };

  // Variants for the parent container that holds all images
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: imageGridStaggerAnimationDelay, // Stagger the animation of child elements
      },
    },
  };

  const row1StartingIndex = 0;
  const row2StartingIndex = 5;
  const row3StartingIndex = 10;

  const row1 = motorheadzImages.slice(
    row1StartingIndex,
    row1StartingIndex + columns
  );
  const row2 = motorheadzImages.slice(
    row2StartingIndex,
    row2StartingIndex + columns
  );
  // const row3 = motorheadzImages.slice(
  //   row3StartingIndex,
  //   row3StartingIndex + columns
  // );

  const row3 = [
    jamiApparel[0],
    jamiApparel[3],
    jamiApparel[4],
    '/machi-market/karachi-murakami-tee-back.png',
    jamiApparel[12],
  ].slice(0, columns);

  const stickerImages = [
    '/priority-tx-stickers/rpgf3-sticker.png',
    '/priority-tx-stickers/zora-sticker.png',
    '/priority-tx-stickers/we-love-the-art-sticker.png',
    '/priority-tx-stickers/bitcoin-sticker.png',
    '/priority-tx-stickers/jvmi-sticker.png',
  ];

  const row4 = stickerImages.slice(0, columns);

  const allRows = useMemo(() => {
    const allRows = [];

    for (let i = 0; i < columns; i++) {
      allRows.push(row1[i]);
      allRows.push(row2[i]);
      allRows.push(row3[i]);
      allRows.push(row4[i]);
    }

    // shuffle array
    allRows.sort(() => Math.random() - 0.5);

    return allRows;
  }, [columns, row1, row2, row3, row4]);

  const [hiddenImages, setHiddenImages] = useState<string[]>([]);

  // shuffle array

  return (
    <div className={styles.viewport}>
      <MessageNotification
        hide={hideNotification}
        onClick={() => {
          setHideNotification(true);
        }}
      />
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.imageGrid} variants={containerVariants}>
          {/* {row1.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageContainer}
              variants={imageContainerVariants}
            >
              <Image
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          ))}
          {row4.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageContainer}
              variants={imageContainerVariants}
            >
              <Image
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          ))}
          {row3.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageContainer}
              variants={imageContainerVariants}
            >
              <Image
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          ))}

          {row2.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageContainer}
              variants={imageContainerVariants}
            >
              <Image
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          ))} */}

          {allRows.map((image, index) => (
            <motion.div
              key={index}
              className={styles.imageContainer}
              style={
                hiddenImages.includes(image)
                  ? { visibility: 'hidden', pointerEvents: 'none', opacity: 0 }
                  : { opacity: 1 }
              }
              variants={imageContainerVariants}
              onClick={() => {
                // setHiddenImages([...hiddenImages, image]);
              }}
            >
              <Image
                src={image}
                alt={'motorhead-' + index}
                width={500}
                height={500}
                className={styles.image}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.p
          className={styles.imageTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: textAnimationDelay }}
        >
          motorheadz, <span className={styles.date}>2022</span>
        </motion.p> */}
      </motion.div>

      <motion.div
        className={styles.taglineContainer}
        initial={{ opacity: 0, scale: 1, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: textAnimationDelay + 0.3,
          transition: { type: 'ease' },
        }}
      >
        <p className={styles.tagline}>[ nft artist / streetwear designer ]</p>
      </motion.div>
    </div>
  );
};

export default SplashSection;
