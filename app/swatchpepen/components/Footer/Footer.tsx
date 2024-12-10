import { RiArrowRightUpLine, RiGalleryView2, RiShuffleLine } from '@remixicon/react';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useState } from 'react';

import styles from '@/app/swatchpepen/components/Footer/Footer.module.scss';
import { imagePaths } from '@/app/swatchpepen/constants';
import { useSwatchpepen } from '@/app/swatchpepen/context';
import { getItemFromPath, getRandomItem } from '@/app/swatchpepen/helpers';
import { Edition } from '@/app/swatchpepen/types';
import Button from '@/components/Button/Button';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import { CheckIcon } from '@/icons/CheckIcon';
import { initial, animate } from '@/swatches/constants';

const Footer = () => {
  const { setSelectedItem } = useSwatchpepen();

  const handleShuffleClick = () => {
    const randomItem = getRandomItem();
    setSelectedItem(randomItem.edition, randomItem.index);
  };

  return (
    <motion.div className={styles.buttons} initial={initial} animate={animate}>
      <Button variant="secondary" isIcon tooltip="shuffle" onClick={handleShuffleClick}>
        <RiShuffleLine />
      </Button>
      <GalleryDialog />
      <Button variant="secondary" isIcon tooltip="opepen.art" href={'https://opepen.art/jvmiart'}>
        <RiArrowRightUpLine />
      </Button>
    </motion.div>
  );
};

const GalleryDialog = () => {
  const { selectedItem, setSelectedItem } = useSwatchpepen();
  const [open, setOpen] = useState(false);

  const getPreviewLabelFromPath = (path: string) => {
    const parts = path.split('/');
    return parts[parts.length - 1] || '';
  };

  const handleItemClick = (edition: Edition, index: string) => {
    setSelectedItem(edition, index);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" isIcon tooltip="gallery">
          <RiGalleryView2 />
        </Button>
      </DialogTrigger>
      <DialogContent showClose={false} className={styles.galleryDialog}>
        <div className={styles.galleryHeader}>
          <div className={styles.galleryTitle}>swatchpepen editions</div>
          <DialogClose className={styles.galleryClose} />
        </div>
        <div className={styles.galleryContent}>
          <div className={styles.itemsContainer}>
            {imagePaths.map((path, index) => {
              const item = getItemFromPath(path);
              return (
                <div
                  key={index}
                  className={classNames(styles.itemContainer, {
                    [styles.selected]:
                      selectedItem.edition === item.edition && selectedItem.index === item.index,
                  })}
                  onClick={() => handleItemClick(item.edition, item.index)}
                >
                  <img src={path} className={styles.item} />
                  <CheckIcon
                    height={20}
                    width={20}
                    color="var(--blue-check)"
                    className={styles.checkIcon}
                    withBackground
                  />
                  <p className={styles.label}>{getPreviewLabelFromPath(path)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { Footer };
