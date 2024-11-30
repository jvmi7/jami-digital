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
      text: 'view on opensea',
      link: 'https://opensea.io/collection/swatches-by-jvmi',
      target: '_blank',
      showIcon: true,
    },
    {
      text: 'visit /swatches',
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
  description: 'an alternative perspective on value, trends & speculation',
  tags: ['coming soon', 'nfts on *****'],
  previewUrl: 'https://charts-interface.netlify.app/?sample=',
  items: ['1', '2', '3', '4'],
  buttons: [
    {
      text: 'join wl',
      link: 'https://opensea.io/collection/swatches-by-jvmi',
      target: '_blank',
      showIcon: true,
    },
  ],
  socialLinks: [],
};

const HIGHLIGHT_URL = 'https://highlight-creator-assets.highlight.xyz/main/base-dir/';

const apple =
  'f8619de4-d712-4909-a365-2f8556027bb1/index.html?h=0x97914c528794b9afd4484803711427848c8e6007c59fceba0403ec1816c75f60&t=1781732985&wa=0x754a6ba5190067ab0f35cb742f6087cbba58de1c&tid=7832&s=10000&a=0xb4a53D07e710657DEF057e7aAbf3f09702a4c405&bh=0x1e364263b500f937e3223dd63ae992a64dac18b956c0c47ae8c54657923bf11e&bn=41013332&c=543210&gp=69&gu=70&ms=661&mi=5&ic=0&loadVer=2';

const zerion =
  '4f95152e-def3-46f2-a08f-3041efa32d3a/index.html?h=0x568354eb356da389b02d0f48791eaba424aa8c0418097e0a57654e4cdd2ff677&t=1778217896&wa=0x673fe1bc14af7a5000fcfebc163fbac82c5c7392&tid=3213&s=10000&a=0x0C374D023DE5A79B7028eBCc2b74547B79d1667D&bh=0xfab99c8ec8cb882a4abe5fc6079bddc4b5f5380cef91ab63cd9b173293db2949&bn=52456312&c=543210&gp=71&gu=82&ms=595&mi=381&ic=0&loadVer=2';

export const AbstractionsProjectMetadata: ProjectMetadata = {
  theme: {
    background: '#eeeeee',
    card: '#dddddd',
    text: '#999999',
    buttonBackground: '#222222',
    buttonTextColor: '#FFFFFF',
  },
  title: 'abstractions',
  description: 'an ongoing collection of pieces inspired by the world around us',
  tags: ['open edition', 'nfts on zero'],
  previewUrl: HIGHLIGHT_URL,
  items: [apple, zerion],
  buttons: [
    {
      text: 'join wl',
      link: 'https://opensea.io/collection/swatches-by-jvmi',
      showIcon: true,
    },
  ],
  socialLinks: [],
};
