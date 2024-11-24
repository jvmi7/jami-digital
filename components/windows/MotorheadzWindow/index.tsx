import { useState } from 'react';
import { CollectionMetadataType, WindowProps, WindowThemeType } from '../../../types';
import { Button } from '../../Button/Button';
import { CollectionMetadata } from '../../Collection/CollectionMetadata';
import { CollectionModal } from '../../Collection/CollectionModal';
import { ItemCard } from '../../Collection/ItemCard';
import { ResponsiveGrid } from '../../ResponsiveGrid';
import styles from '../window.module.scss';
import { ContentPane, ContentPaneMetadataType } from '../../Collection/ContentPane';
import { Caption } from '../../Caption/Caption';
import { ExternalLinkIcon } from '../../../icons/ExternalLinkIcon';
import { useQuery } from '@tanstack/react-query';

const fetchMetadata = async () => {
  const url = '/metadata/motorheadzMetadata.json'; // Replace with your JSON file's URL
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const MotorheadzWindow = ({ theme }: WindowProps) => {
  // const { data: motorheadz, isLoading, error } = useQuery(['metadata'], fetchMetadata);
  const motorheadz: any[] = [];
  const isLoading = false;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (isLoading) return <div>Loading...</div>;

  const viewOnOpenseaButton = (url: string) => (
    <Button themeName="dark" icon={<ExternalLinkIcon height={16} />} href={url}>
      view on opensea
    </Button>
  );
  const readBlogPostButton = (
    <Button
      themeName="dark"
      icon={<ExternalLinkIcon height={16} />}
      href="https://mirror.xyz/0x57D1eAE9f0972723F0e78EAF4e6C08e90565206F/AtKMzoVY1qzrvA1gal1XqJv74bpx-sg9ptv5TDw2maU"
    >
      read blog post
    </Button>
  );
  const motorheadzContractAddress = '0x5c9d55b78febcc2061715ba4f57ecf8ea2711f2c';

  const collectionMetadata: CollectionMetadataType = {
    name: 'motorheadz',
    description: 'pixelated avatars rooted in nostalgia',
    imagePath: '/motorheadz-icon.png',
    imageBackground: 'linear-gradient(180deg, #02c5ff 0%, #02a0ef 100%)',
    stats: [
      {
        label: 'avatars',
        value: '4.3k',
      },
      {
        label: 'collectors',
        value: '2.1k',
      },
      {
        label: 'sold',
        value: '100%',
      },
    ],
    buttons: [
      viewOnOpenseaButton('https://opensea.io/collection/motorheadz-optimism'),
      readBlogPostButton,
    ],
  };

  // Replace this later
  const imageMetadataUrl = 'https://motorheadz.s3.us-west-1.amazonaws.com/images/';
  const previewImages = [];

  for (let i = 0; i < motorheadz.length; i++) {
    previewImages.push({
      name: motorheadz[i].name,
      imgSrc: `${imageMetadataUrl}${i}.png`,
      onClick: () => {
        setCurrentImageIndex(i);
        setIsModalOpen(true);
      },
    });
  }

  console.log(motorheadz[0]);

  const currentContentMetadata: ContentPaneMetadataType = {
    collection: 'motorheadz',
    item: motorheadz[currentImageIndex].name,
    stats: [
      { label: 'network', value: 'optimism' },
      {
        label: 'contract',
        value: '0x5c9...f2c',
        url: `https://optimistic.etherscan.io/address/${motorheadzContractAddress}`,
      },
    ],
    traits: motorheadz[currentImageIndex].attributes,
    caption: (
      <Caption
        theme={theme}
        caption="test testa asdf asdf asdf asdf asdf asd fasd fas dfas df asdf asdf dfasdfsdfas test"
      />
    ),
    buttons: [
      viewOnOpenseaButton(
        `https://opensea.io/assets/optimism/${motorheadzContractAddress}/${currentImageIndex}`
      ),
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

  const currentImage = <ItemCard imgSrc={previewImages[currentImageIndex].imgSrc} />;
  const currentContentPane = <ContentPane theme={theme} metadata={currentContentMetadata} />;

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
      <ResponsiveGrid minColumnWidth={170} gap={4}>
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

export { MotorheadzWindow };
