import { ProjectMetadata } from '@/home/types';
import { FarcasterIcon } from '@/icons/FarcasterIcon';
import { MagicEdenIcon } from '@/icons/MagicEdenIcon';
import { OpenSeaIcon } from '@/icons/OpenSeaIcon';

export const palette = [
  '#FF0000',
  '#FF8300',
  '#FFE500',
  '#00FF00',
  '#00F9FF',
  '#00A4FF',
  '#0049FF',
  '#7C29FF',
  '#FF00ED',
];

export const SwatchesProjectMetadata: ProjectMetadata = {
  theme: {
    background: '#eeeeee',
    card: '#dddddd',
    text: '#999999',
    buttonBackground: '#222222',
    buttonTextColor: '#FFFFFF',
  },
  title: 'swatches',
  description: 'an exploration of color, motion & human interaction',
  tags: ['7,777 pieces', 'sold out', 'nfts on base'],
  previewUrl: 'https://www.swatches-animation-url.art/items/',
  items: ['16', '2104', '7031', '469'],
  buttons: [
    {
      text: 'learn more',
      link: '/swatches',
    },
  ],
  socialLinks: [
    {
      icon: <OpenSeaIcon />,
      href: 'https://opensea.io/collection/swatches-by-jvmi',
    },
    {
      icon: <MagicEdenIcon />,
      href: 'https://magiceden.io/collections/base/0x13dc8261fce63499aa25deb512bb1827b411b83b',
    },
    {
      icon: <FarcasterIcon />,
      href: 'https://warpcast.com/~/channel/swatches',
    },
  ],
};

export const ChartsProjectMetadata: ProjectMetadata = {
  theme: {
    background: '#000000',
    card: '#222222',
    text: '#eeeeee',
    buttonBackground: '#222222',
    buttonTextColor: '#FFFFFF',
  },
  title: 'charts',
  description: 'reframing the perspective on price, trends & speculation',
  tags: ['coming soon', 'nfts on *****'],
  previewUrl: 'https://charts-interface.netlify.app/?sample=',
  items: ['1', '2', '3', '4'],
  buttons: [
    {
      text: 'join wl?',
      link: 'https://opensea.io/collection/swatches-by-jvmi',
      target: '_blank',
      showIcon: true,
    },
  ],
  socialLinks: [],
};
