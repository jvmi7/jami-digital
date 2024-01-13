import { useWindowSize } from 'react-use';
import styles from './SplashSection.module.scss';
import Image from 'next/image';
import { motion } from 'framer-motion';

const SplashSection = () => {
  const { height } = useWindowSize();

  const isSmall = height < 850;
  const numImages = isSmall ? 9 : 12;
  const imageGridStaggerAnimationDelay = 0.06;
  const textAnimationDelay = numImages * imageGridStaggerAnimationDelay + 0.2;

  const motorheadzImages = [];
  for (let i = 1; i <= numImages; i++) {
    motorheadzImages.push('/motorheadz/motorhead-' + i + '.png');
  }

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
      </motion.div>
      <motion.p
        className={styles.imageTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: textAnimationDelay }}
      >
        motorheadz, <span className={styles.date}>2022</span>
      </motion.p>
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
        <p className={styles.tagline}>[ artwork streetwear nfts ]</p>
      </motion.div>
    </div>
  );
};

export { SplashSection };
