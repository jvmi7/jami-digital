import { useState } from 'react';
import { CollectionMetadataType, WindowThemeType } from '../../../types';
import { Button } from '../../Button/Button';
import { CollectionMetadata } from '../../Collection/CollectionMetadata';
import { CollectionModal } from '../../Collection/CollectionModal';
import { ItemCard } from '../../Collection/ItemCard';
import { ResponsiveGrid } from '../../ResponsiveGrid';
import styles from '../window.module.scss';
import { ContentPane } from '../../Collection/ContentPane';

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

  // Replace this later
  const metadataUrl = 'https://motorheadz.s3.us-west-1.amazonaws.com/images/';
  const previewImages = [];

  for (let i = 0; i < 100; i++) {
    previewImages.push({
      name: 'motorhead ' + i,
      imgSrc: `${metadataUrl}${i}.png`,
      onClick: () => {
        setIsModalOpen(true);
      }
    });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = <ItemCard imgSrc={previewImages[currentImageIndex].imgSrc} />;
  const currentContentPane = <ContentPane />;

  return (
    <div className={styles.container}>
      <CollectionModal theme={theme} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} image={currentImage} content={currentContentPane} />

      <CollectionMetadata theme={theme} metadata={collectionMetadata} />
      <ResponsiveGrid minColumnWidth={170} gap={4}>
        {previewImages.map((image) => {
          return <ItemCard name={image.name} imgSrc={image.imgSrc} onClick={image.onClick} />;
        })}
      </ResponsiveGrid>
    </div>
  );
};

export { MotorheadzWindow };
