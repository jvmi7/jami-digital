import { RiArrowRightUpLine } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import { Footer } from '@/app/swatchpepen/components/Footer/Footer';
import styles from '@/app/swatchpepen/components/SwatchpepenPage/SwatchpepenPage.module.scss';
import { SwatchpepenProvider, useSwatchpepen } from '@/app/swatchpepen/context';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { externalLinks } from '@/constants';
import { ClientOnly } from '@/helpers/ClientOnly';
import { CheckIcon } from '@/icons/CheckIcon';
import { animate, initial, pageVariants } from '@/swatches/constants';

const SwatchpepenPreview = () => {
  const { selectedItem } = useSwatchpepen();

  return (
    <motion.div
      className={styles.iframe}
      variants={pageVariants}
      initial="initial"
      animate="animate"
    >
      <iframe
        src={`https://swatchpepen.vercel.app/?edition=${selectedItem.edition}&id=${selectedItem.index}`}
        className={styles.container}
        title="Swatchpepen Preview"
      />
      <motion.div initial={initial} animate={animate}>
        <p className={styles.title}>
          <span>swatchpepen</span>
          <CheckIcon height={20} width={20} color="var(--blue-check)" />
        </p>
      </motion.div>
    </motion.div>
  );
};

const MintButton = ({ isMobile }: { isMobile: boolean }) => (
  <Button variant="primary" href={externalLinks.swatchpepenSubmission}>
    <span>mint</span>
    {!isMobile && <RiArrowRightUpLine size={18} />}
  </Button>
);

const SwatchPepenPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsMobile(width < 690);
  }, [width]);

  return (
    <ClientOnly>
      <SwatchpepenProvider>
        <div className={styles.container}>
          <Header
            theme="LIGHT"
            backgroundColor="var(--swatches-background-color)"
            foregroundColor="var(--swatches-text-color)"
            button={<MintButton isMobile={isMobile} />}
            transitionDelay={1}
          />
          <div className={styles.content}>
            <SwatchpepenPreview />
            <Footer />
          </div>
        </div>
      </SwatchpepenProvider>
    </ClientOnly>
  );
};

export default SwatchPepenPage;
