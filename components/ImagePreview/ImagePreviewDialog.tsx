import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCloseFill,
} from '@remixicon/react';
import classNames from 'classnames';
import { ReactNode } from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogClose } from '@/components/ui/dialog';
import styles from '@/components/ImagePreview/ImagePreviewDialog.module.scss';

interface ImagePreviewDialogProps {
  trigger: ReactNode;
  iframeUrl: string;
  bottom: ReactNode;
  onOpenChange?: (open: boolean) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export const ImagePreviewDialog = ({
  trigger,
  iframeUrl,
  bottom,
  onOpenChange,
  onPrevious,
  onNext,
}: ImagePreviewDialogProps) => {
  return (
    <Dialog onOpenChange={onOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={styles.dialogContent} showClose={false}>
        <div className={styles.header}>
          <DialogClose asChild>
            <button className={classNames(styles.button, styles.iconButton)}>
              <RiCloseFill size={24} />
            </button>
          </DialogClose>

          <div className={styles.buttonContainer}>
            <button className={classNames(styles.button, styles.iconButton)} onClick={onPrevious}>
              <RiArrowLeftLine size={24} />
            </button>
            <button className={classNames(styles.button, styles.iconButton)} onClick={onNext}>
              <RiArrowRightLine size={24} />
            </button>
          </div>
        </div>
        <div className={styles.iframeContainer}>
          <iframe src={iframeUrl} className={styles.iframe} />
        </div>
        <div className={styles.buttonContainer}>{bottom}</div>
      </DialogContent>
    </Dialog>
  );
};
