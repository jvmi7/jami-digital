import { MenuIcons } from '../components/MenuIcon/MenuIcon';
import { Window } from '../types';

export const links = [
  {
    name: 'projects',
    href: 'https://channel53.myshopify.com/',
    icon: MenuIcons.INSTAGRAM
  },
  {
    name: 'socials',
    href: 'https://channel53.myshopify.com/',
    icon: MenuIcons.INSTAGRAM
  }
];

export const desktopWindows: Record<string, Window> = {
  motorheadz: {
    urlLabel: 'motorheadz.xyz',
    content: <div>this is motorheadz</div>
  },
  machiMarket: {
    urlLabel: 'machi.market',
    content: <div>this is machi.market</div>
  },
  swatches: {
    urlLabel: 'swatches',
    content: <div>this is swatches</div>
  }
};
