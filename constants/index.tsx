import { MenuIcons } from '../components/MenuIcon/MenuIcon';
import { Window, WindowThemeType } from '../types';
import { MotorheadzWindow } from '../components/windows/MotorheadzWindow';
import { MachiMarketWindow } from '../components/windows/MachiMarketWindow';

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

const light: WindowThemeType = {
  theme: 'light',
  windowBackground: '#c3c6cb',
  windowAccent: '#BBBBBB',
  windowBorder: '#afb2b7',
  urlTextColor: '#696b6e',
  closeButtonBackground: '#ff0000',
  closeButtonBorder: '#c50022',
  closeButtonText: '#6B001C',
  minimizeButtonBackground: '#fcff00',
  minimizeButtonBorder: '#ffac1d',
  minimizeButtonText: '#8E6900',
  maximizeButtonBackground: '#00ff00',
  maximizeButtonBorder: '#00c500',
  maximizeButtonText: '#006B00',
  contentBackground: '#f0f2f5',
  textPrimary: '#000000',
  textSecondary: '#696b6e',
  dividerColor: '#dddddd'
};

const dark: WindowThemeType = {
  theme: 'dark',
  windowBackground: '#282828',
  windowAccent: '#1A1A1A',
  windowBorder: '#1E1E1E',
  urlTextColor: '#4D4D4D',
  closeButtonBackground: '#ff0000',
  closeButtonBorder: '#c50022',
  closeButtonText: '#6B001C',
  minimizeButtonBackground: '#fcff00',
  minimizeButtonBorder: '#ffac1d',
  minimizeButtonText: '#8E6900',
  maximizeButtonBackground: '#00ff00',
  maximizeButtonBorder: '#00c500',
  maximizeButtonText: '#006B00',
  contentBackground: '#161616',
  textPrimary: '#FFFFFF',
  textSecondary: '#C3C3C3',
  dividerColor: '#4D4D4D'
};

const retro: WindowThemeType = {
  theme: 'retro',
  windowBackground: '#1350FF',
  windowAccent: '#0637EA',
  windowBorder: '#0637EA',
  urlTextColor: '#2100FF',
  closeButtonBackground: '#ff0000',
  closeButtonBorder: '#c50022',
  closeButtonText: '#6B001C',
  minimizeButtonBackground: '#fcff00',
  minimizeButtonBorder: '#ffac1d',
  minimizeButtonText: '#8E6900',
  maximizeButtonBackground: '#00ff00',
  maximizeButtonBorder: '#00c500',
  maximizeButtonText: '#006B00',
  contentBackground: '#FFFFFF',
  textPrimary: '#111111',
  textSecondary: '#333333',
  dividerColor: '#DDDDDD'
};

export const desktopWindows: Record<string, Window> = {
  motorheadz: {
    urlLabel: 'motorheadz.xyz',
    content: <MotorheadzWindow theme={dark} />,
    theme: dark
  },
  machiMarket: {
    urlLabel: 'machi.market',
    content: <MachiMarketWindow theme={light} />,
    theme: light
  },
  swatches: {
    urlLabel: 'swatches',
    content: <div>this is swatches</div>,
    theme: dark
  }
};
