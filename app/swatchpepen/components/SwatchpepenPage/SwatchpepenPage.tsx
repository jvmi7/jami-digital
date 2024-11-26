import { RiAddLine, RiArrowRightUpLine, RiGalleryView2, RiShuffleLine } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import styles from '@/app/swatchpepen/components/SwatchpepenPage/SwatchpepenPage.module.scss';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { externalLinks } from '@/constants';
import { animate, initial, pageVariants } from '@/swatches/constants';

const SwatchPepenPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < 600);
  }, [width]);

  const viewSetButton = (
    <Button variant="primary" isIcon={isMobile} href={externalLinks.swatchpepenSubmission}>
      {!isMobile && <span>view set</span>}
      <RiArrowRightUpLine size={18} />
    </Button>
  );

  const buttons = (
    <motion.div
      className={styles.buttons}
      initial={initial}
      animate={animate}
      transition={{ delay: 0.5 }}
    >
      <Button variant="secondary" isIcon>
        <RiShuffleLine />
      </Button>
      <Button variant="secondary" isIcon>
        <RiGalleryView2 />
      </Button>
      <Button variant="secondary" isIcon>
        <RiAddLine />
      </Button>
    </motion.div>
  );

  return (
    <div className={styles.container}>
      <Header
        theme="LIGHT"
        backgroundColor="var(--swatches-background-color)"
        foregroundColor="var(--swatches-text-color)"
        button={viewSetButton}
      />

      <div className={styles.content}>
        <SwatchpepenPreview swatchIndex={1} />
        {buttons}
      </div>
    </div>
  );
};

const SwatchpepenPreview = ({ swatchIndex }: { swatchIndex: number }) => {
  return (
    <motion.div
      className={styles.iframe}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <iframe
        src={`https://swatchpepen.vercel.app/?edition=Twenty&id=${swatchIndex}`}
        className={styles.container}
      />
      <motion.div initial={initial} animate={animate}>
        <p className={styles.title}>swatchpepen</p>
      </motion.div>
    </motion.div>
  );
};

export default SwatchPepenPage;
