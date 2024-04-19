import { RiDownloadFill } from '@remixicon/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '../../components/ui/dialog';
import Button from '../Button/Button';

import styles from './SaveDialog.module.scss';

import JSZip from 'jszip';
import { saveAs } from 'file-saver';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  tokenID: string;
};
const SaveDialog = ({ isOpen, setIsOpen, tokenID }: Props) => {
  
  // const light_mode_url = `https://jvmi-assets.s3.us-west-1.amazonaws.com/swatches/light/${tokenID}.gif`;
  const light_mode_url = `https://buckmob.s3.us-west-1.amazonaws.com/images/1.png`;
  const light_mode_label = `${tokenID}_light.gif`;
  const dark_mode_url = `https://jvmi-assets.s3.us-west-1.amazonaws.com/swatches/dark/${tokenID}.gif`;
  // const dark_mode_url = `https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1024px-Google_Images_2015_logo.svg.png`;
  const dark_mode_label = `${tokenID}_dark.gif`;

  const images = [
    {
      url: light_mode_url,
      label: light_mode_label,
    },
    // {
    //   url: dark_mode_url,
    //   label: dark_mode_label,
    // },
  ];

  const downloadAll = async (): Promise<void> => {
    const zip = new JSZip();
    const imgFolder = zip.folder('images');

    await Promise.all(
      images.map(async image => {
        console.log('image', image);
        const response = await fetch(image.url, {
          method: 'GET',
          mode: 'cors',  // Ensure CORS mode is specified
          credentials: 'same-origin'  // or 'same-origin' if your requests require cookies or auth headers
        });        const blob = await response.blob();
        if (imgFolder) imgFolder.file(image.label, blob);
      })
    );

    zip.generateAsync({ type: 'blob' }).then((content: Blob) => {
      saveAs(content, 'images.zip');
    });
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
                  // downloadImages([image.url]);
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
