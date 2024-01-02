import { CollectionMetadataType, WindowThemeType } from '../../../types';
import { Button } from '../../Button/Button';
import { CollectionMetadata } from '../../Collection/CollectionMetadata';
import styles from './MotorheadzWindow.module.scss';

interface Props {
  theme: WindowThemeType;
}

const MotorheadzWindow = ({ theme }: Props) => {
  const collectionMetadata: CollectionMetadataType = {
    name: 'motorheadz',
    description: 'pixelated avatars rooted in nostalgia',
    imagePath: '/motorheadz-icon.png',
    imageBackground: 'linear-gradient(180deg, #02c5ff 0%, #02a0ef 100%)',
    stats: [
      {
        label: 'avatars',
        value: '4.2k'
      },
      {
        label: 'collectors',
        value: '2.1k'
      },
      {
        label: 'sold',
        value: '100%'
      }
    ],
    buttons: [<Button themeName='dark'>view on opensea</Button>, <Button themeName='dark'>read blog post</Button>]
  };

  const metadataUrl = 'https://motorheadz.s3.us-west-1.amazonaws.com/images/';
  const previewImages = [];

  for (let i = 0; i < 100; i++) {
    previewImages.push(<img src={`${metadataUrl}${i}.png`} />);
  }

  return (
    <div className={styles.container}>
      <CollectionMetadata theme={theme} metadata={collectionMetadata} />
      <div className={styles.imagesContainer}>
        <div className={styles.imagesGrid}>{previewImages.map((image) => image)}</div>
      </div>
    </div>
  );
};

export { MotorheadzWindow };
