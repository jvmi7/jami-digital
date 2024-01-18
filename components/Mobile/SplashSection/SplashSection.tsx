import { useWindowSize } from 'react-use';
import styles from './SplashSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SplashSection = () => {
  const { height, width } = useWindowSize();

  // Determine the number of columns based on width
  const columns = width < 800 ? 3 : width < 1000 ? 4 : 5;

  // Determine the number of rows based on height
  const rows = height < 900 ? 3 : 4;

  // Calculate total number of images to display
  const numImages = columns * rows;

  const motorheadzImages = [];
  for (let i = 1; i <= numImages; i++) {
    motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
  }

  const isSmallWidth = width < 800;
  const isLargeWidth = width > 1000;
  const isSmallHeight = height < 900;
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

  return (
    <div className={styles.viewport}>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.imageGrid} variants={containerVariants}>
          {motorheadzImages.map((image, index) => (
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
        </motion.div>
        <motion.p
          className={styles.imageTitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: textAnimationDelay }}
        >
          motorheadz, <span className={styles.date}>2022</span>
        </motion.p>
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
        <p className={styles.tagline}>[ art streetwear & nfts ]</p>
      </motion.div>
    </div>
  );
};

export default SplashSection;
