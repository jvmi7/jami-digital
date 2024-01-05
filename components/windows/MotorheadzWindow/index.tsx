import { useState } from 'react';
import { CollectionMetadataType, WindowThemeType } from '../../../types';
import { Button } from '../../Button/Button';
import { CollectionMetadata } from '../../Collection/CollectionMetadata';
import { CollectionModal } from '../../Collection/CollectionModal';
import { ItemCard } from '../../Collection/ItemCard';
import { ResponsiveGrid } from '../../ResponsiveGrid';
import styles from '../window.module.scss';
import { ContentPane, ContentPaneMetadataType } from '../../Collection/ContentPane';
import { Caption } from '../../Caption/Caption';

interface Props {
  theme: WindowThemeType;
}

const MotorheadzWindow = ({ theme }: Props) => {
  const viewOnOpenseaButton = (url: string) => <Button themeName='dark'>view on opensea</Button>;
  const readBlogPostButton = <Button themeName='dark'>read blog post</Button>;
  const motorheadzContractAddress = '0x5c9d55b78febcc2061715ba4f57ecf8ea2711f2c';

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
    buttons: [viewOnOpenseaButton('https://opensea.io/collection/motorheadz-optimism'), readBlogPostButton]
  };

  // Replace this later
  const metadataUrl = 'https://motorheadz.s3.us-west-1.amazonaws.com/images/';
  const previewImages = [];

  for (let i = 0; i < 100; i++) {
    previewImages.push({
      name: 'motorhead ' + i,
      imgSrc: `${metadataUrl}${i}.png`,
      onClick: () => {
        setCurrentImageIndex(i);
        setIsModalOpen(true);
      }
    });
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentContentMetadata: ContentPaneMetadataType = {
    collection: 'motorheadz',
    item: `#${currentImageIndex}`,
    stats: [
      { label: 'network', value: 'optimism' },
      { label: 'contract', value: '0x5c9...f2c', url: `https://optimistic.etherscan.io/address/${motorheadzContractAddress}` }
    ],
    traits: [
      { trait: 'background', value: 'blue' },
      { trait: 'eyes', value: 'blue' },
      { trait: 'mouth', value: 'smile' },
      { trait: 'hat', value: 'none' }
    ],
    caption: <Caption theme={theme} caption='test testa asdf asdf asdf asdf asdf asd fasd fas dfas df asdf asdf dfasdfsdfas test' />,
    buttons: [viewOnOpenseaButton(`https://opensea.io/assets/optimism/${motorheadzContractAddress}/${currentImageIndex}`), readBlogPostButton]
  };

  const currentImage = <ItemCard imgSrc={previewImages[currentImageIndex].imgSrc} />;
  const currentContentPane = <ContentPane theme={theme} metadata={currentContentMetadata} />;

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
