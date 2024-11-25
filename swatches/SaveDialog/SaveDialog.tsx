import { RiDownloadFill } from '@remixicon/react';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Button from '@/components/Button/Button';
import styles from '@/swatches/SaveDialog/SaveDialog.module.scss';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tokenID: string;
};
const SaveDialog = ({ isOpen, setIsOpen, tokenID }: Props) => {
  const light_mode_url = `https://f005.backblazeb2.com/file/swatches/light/${tokenID}.gif`;
  const light_mode_label = `${tokenID}_light.gif`;
  const dark_mode_url = `https://f005.backblazeb2.com/file/swatches/dark/${tokenID}.gif`;
  const dark_mode_label = `${tokenID}_dark.gif`;

  const images = [
    {
      url: light_mode_url,
      label: light_mode_label,
    },
    {
      url: dark_mode_url,
      label: dark_mode_label,
    },
  ];

  const downloadAll = async (): Promise<void> => {
    const zip = new JSZip();
    const imgFolder = zip.folder('images');

    await Promise.all(
      images.map(async image => {
        try {
          const response = await fetch(image.url);
          if (!response.ok) throw new Error(`HTTP status ${response.status}`);
          const blob = await response.blob();
          if (imgFolder) imgFolder.file(image.label, blob);

          // further processing
        } catch (error) {
          console.error('Download failed:', error);
        }
      })
    );

    zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
      saveAs(content, 'images.zip');
    });
  };

  const downloadSingle = async (url: string, label: string): Promise<void> => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP status ${response.status}`);
      const blob = await response.blob();
      saveAs(blob, label);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => setIsOpen(open)}>
      <DialogContent className={styles.container}>
        <DialogHeader className={styles.header}>
          <DialogTitle>save as</DialogTitle>
        </DialogHeader>
        <div className={styles.body}>
          {images.map((image, index) => (
            <div key={index} className={styles.downloadContainer}>
              <div className={styles.metadata}>
                <img src={image.url} alt={image.label} />
                <p>{image.label}</p>
              </div>
              <Button
                isIcon
                variant="primary"
                onClick={() => {
                  downloadSingle(image.url, image.label);
                }}
              >
                <RiDownloadFill size={16} />
              </Button>
            </div>
          ))}
          <Button variant="primary" isIcon onClick={downloadAll}>
            <div className={styles.downloadButtonContent}>
              <span>download all</span> <RiDownloadFill size={16} />{' '}
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { SaveDialog };
