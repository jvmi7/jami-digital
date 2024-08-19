import { useState } from 'react';
import {
  CollectionMetadataType,
  WindowProps,
  WindowThemeType,
} from '../../../types';
import { Button } from '../../Button/Button';
import { CollectionMetadata } from '../../Collection/CollectionMetadata';
import { CollectionModal } from '../../Collection/CollectionModal';
import { ItemCard } from '../../Collection/ItemCard';
import { ResponsiveGrid } from '../../ResponsiveGrid';
import styles from '../window.module.scss';
import {
  ContentPane,
  ContentPaneMetadataType,
} from '../../Collection/ContentPane';
import { Caption } from '../../Caption/Caption';
import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { machiMarketItems } from './constants';

const MachiMarketWindow = ({ theme }: WindowProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const shopButton = (url: string) => (
    <Button
      themeName="light"
      icon={<ExternalLinkIcon height={16} />}
      href={url}
    >
      shop
    </Button>
  );
  const readBlogPostButton = (
    <Button
      themeName="light"
      variant="secondary"
      icon={<ExternalLinkIcon height={16} color={theme.textSecondary} />}
      href="https://mirror.xyz/0x57D1eAE9f0972723F0e78EAF4e6C08e90565206F/AtKMzoVY1qzrvA1gal1XqJv74bpx-sg9ptv5TDw2maU"
    >
      read blog post
    </Button>
  );

  const collectionMetadata: CollectionMetadataType = {
    name: 'machi.market',
    description: 'the world’s first nostalgic streetwear bazaar',
    imagePath: '/machi-market-icon.svg',
    imageBackground: 'linear-gradient(180deg, #323232 0%, #0f0f0f 100%)',
    buttons: [shopButton('https://www.machi.market'), readBlogPostButton],
  };

  // Replace this later
  const imageMetadataUrl =
    'https://motorheadz.s3.us-west-1.amazonaws.com/images/';
  const previewImages = [];

  for (let i = 0; i < machiMarketItems.length; i++) {
    previewImages.push({
      name: machiMarketItems[i].name,
      imgSrc: machiMarketItems[i].imgSrc,
      onClick: () => {
        setCurrentImageIndex(i);
        setIsModalOpen(true);
      },
    });
  }

  const currentContentMetadata: ContentPaneMetadataType = {
    collection: 'machi.market',
    item: machiMarketItems[currentImageIndex].name,
    price: machiMarketItems[currentImageIndex].price,
    stats: machiMarketItems[currentImageIndex].stats,
    caption: (
      <Caption
        theme={theme}
        caption={machiMarketItems[currentImageIndex].caption}
      />
    ),
    buttons: [
      shopButton(`https://opensea.io/assets/optimism/${currentImageIndex}`),
    ],
  };

  const showNextButton = currentImageIndex < previewImages.length - 1;
  const showPreviousButton = currentImageIndex > 0;

  const handleNextClicked = () => {
    if (showNextButton) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousClicked = () => {
    if (showPreviousButton) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const currentImage = (
    <ItemCard imgSrc={previewImages[currentImageIndex].imgSrc} />
  );
  const currentContentPane = (
    <ContentPane theme={theme} metadata={currentContentMetadata} />
  );

  return (
    <div className={styles.container}>
      <CollectionModal
        theme={theme}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        image={currentImage}
        content={currentContentPane}
        onNext={handleNextClicked}
        onPrev={handlePreviousClicked}
        showNextButton={showNextButton}
        showPrevButton={showPreviousButton}
      />
      <CollectionMetadata theme={theme} metadata={collectionMetadata} />
      <ResponsiveGrid minColumnWidth={240} gap={4}>
        {previewImages.map(image => {
          return (
            <ItemCard
              key={image.imgSrc}
              name={image.name}
              imgSrc={image.imgSrc}
              onClick={image.onClick}
            />
          );
        })}
      </ResponsiveGrid>
    </div>
  );
};

export { MachiMarketWindow };
