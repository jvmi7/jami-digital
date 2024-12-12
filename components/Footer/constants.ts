import { externalLinks, socialLinks } from '@/constants';
import AbstractionsIcon from '@/icons/AbstractionsIcon';
import ChartsIcon from '@/icons/ChartsIcon';
import { SwatchesIcon } from '@/icons/SwatchesIcon';
import SwatchpepenIcon from '@/icons/SwatchpepenIcon';

export const links = [
  {
    name: 'twitter/x',
    link: socialLinks.x,
  },
  {
    name: 'farcaster',
    link: socialLinks.farcaster,
  },
  {
    name: 'zora',
    link: socialLinks.zora,
  },
  {
    name: 'highlight',
    link: socialLinks.highlight,
  },
  {
    name: 'github',
    link: socialLinks.github,
  },
];

export const artworkLinks = [
  {
    name: 'swatches',
    link: '/swatches',
    icon: SwatchesIcon,
  },
  {
    name: 'abstractions',
    link: externalLinks.abstractionsCollection,
    icon: AbstractionsIcon,
    target: '_blank',
  },
  {
    name: 'charts',
    link: '/charts',
    icon: ChartsIcon,
  },
  {
    name: 'swatchpepen',
    link: '/swatchpepen',
    icon: SwatchpepenIcon,
  },
];
