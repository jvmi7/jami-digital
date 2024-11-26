import { RiAddLine, RiArrowRightUpLine, RiGalleryView2, RiShuffleLine } from '@remixicon/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';

import styles from '@/app/swatchpepen/components/SwatchpepenPage/SwatchpepenPage.module.scss';
import Button from '@/components/Button/Button';
import { Header } from '@/components/Header/Header';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { externalLinks } from '@/constants';
import { tooltipDelay } from '@/constants/animations';
import { CheckIcon } from '@/icons/CheckIcon';
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
    <motion.div className={styles.buttons} initial={initial} animate={animate}>
      <TooltipProvider delayDuration={tooltipDelay}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" isIcon>
              <RiShuffleLine />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>shuffle</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={tooltipDelay}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" isIcon>
              <RiGalleryView2 />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>gallery</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider delayDuration={tooltipDelay}>
        <Tooltip>
          <TooltipTrigger>
            <Button variant="secondary" isIcon>
              <RiAddLine />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>add to cart</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );

  return (
    <div className={styles.container}>
      <Header
        theme="LIGHT"
        backgroundColor="var(--swatches-background-color)"
        foregroundColor="var(--swatches-text-color)"
        button={viewSetButton}
        transitionDelay={1}
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
        <p className={styles.title}>
          <span>swatchpepen</span>
          <CheckIcon height={20} width={20} color="#1D9BF0" />
        </p>
      </motion.div>
    </motion.div>
  );
};

export default SwatchPepenPage;
