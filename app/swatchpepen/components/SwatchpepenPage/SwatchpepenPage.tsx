import { RiArrowRightUpLine, RiGalleryView2, RiShuffleLine } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import styles from '@/app/swatchpepen/components/SwatchpepenPage/SwatchpepenPage.module.scss';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { externalLinks } from '@/constants';
import { ClientOnly } from '@/helpers/ClientOnly';
import { CheckIcon } from '@/icons/CheckIcon';
import { animate, initial, pageVariants } from '@/swatches/constants';

const SwatchpepenPreview = ({ swatchIndex }: { swatchIndex: number }) => (
  <motion.div className={styles.iframe} variants={pageVariants} initial="initial" animate="animate">
    <iframe
      src={`https://swatchpepen.vercel.app/?edition=Twenty&id=${swatchIndex}`}
      className={styles.container}
      title="Swatchpepen Preview"
    />
    <motion.div initial={initial} animate={animate}>
      <p className={styles.title}>
        <span>swatchpepen</span>
        <CheckIcon height={20} width={20} color="#1D9BF0" />
      </p>
    </motion.div>
  </motion.div>
);

const ActionButtons = () => (
  <motion.div className={styles.buttons} initial={initial} animate={animate}>
    <Button variant="secondary" isIcon tooltip="shuffle">
      <RiShuffleLine />
    </Button>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" isIcon tooltip="gallery">
          <RiGalleryView2 />
        </Button>
      </DialogTrigger>
      <GalleryDialogContent />
    </Dialog>
    <Button variant="secondary" isIcon tooltip="view set">
      <RiArrowRightUpLine />
    </Button>
  </motion.div>
);

const GalleryDialogContent = () => (
  <DialogContent showClose={false} className={styles.galleryDialog}>
    <div className={styles.galleryHeader}>
      <div className={styles.galleryTitle}>swatchpepen editions</div>
      <div className={styles.galleryClose}></div>
    </div>
    <div className={styles.galleryContent}>
      <div className={styles.itemsContainer}>
        <div className={styles.item}>hey</div>
      </div>
    </div>
  </DialogContent>
);

const MintButton = ({ isMobile }: { isMobile: boolean }) => (
  <Button variant="primary" href={externalLinks.swatchpepenSubmission}>
    <span>mint</span>
    {!isMobile && <RiArrowRightUpLine size={18} />}
  </Button>
);

const SwatchPepenPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();
  const [selectedIndex] = useState(1);

  useEffect(() => {
    setIsMobile(width < 690);
  }, [width]);

  return (
    <ClientOnly>
      <div className={styles.container}>
        <Header
          theme="LIGHT"
          backgroundColor="var(--swatches-background-color)"
          foregroundColor="var(--swatches-text-color)"
          button={<MintButton isMobile={isMobile} />}
          transitionDelay={1}
        />

        <div className={styles.content}>
          <SwatchpepenPreview swatchIndex={selectedIndex} />
          <ActionButtons />
        </div>
      </div>
    </ClientOnly>
  );
};

export default SwatchPepenPage;
