import { MenuIcons } from '../components/MenuIcon/MenuIcon';
import { Window, WindowThemeType } from '../types';
import { MotorheadzWindow } from '../components/windows/MotorheadzWindow';

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

const classic: WindowThemeType = {
  windowBackground: '#c3c6cb',
  windowAccent: '#BBBBBB',
  windowBorder: '#afb2b7',
  text: '#696b6e',
  primaryButtonBackground: '#ff0000',
  primaryButtonBorder: '#c50022',
  primaryButtonText: '#6B001C',
  secondaryButtonBackground: '#fcff00',
  secondaryButtonBorder: '#ffac1d',
  secondaryButtonText: '#8E6900',
  contentBackground: '#f0f2f5'
};

const dark: WindowThemeType = {
  windowBackground: '#282828',
  windowAccent: '#1A1A1A',
  windowBorder: '#1E1E1E',
  text: '#4D4D4D',
  primaryButtonBackground: '#ff0000',
  primaryButtonBorder: '#c50022',
  primaryButtonText: '#6B001C',
  secondaryButtonBackground: '#fcff00',
  secondaryButtonBorder: '#ffac1d',
  secondaryButtonText: '#8E6900',
  contentBackground: '#161616'
};

export const desktopWindows: Record<string, Window> = {
  motorheadz: {
    urlLabel: 'motorheadz.xyz',
    content: <MotorheadzWindow />,
    theme: dark
  },
  machiMarket: {
    urlLabel: 'machi.market',
    content: <div>this is machi.market</div>,
    theme: dark
  },
  swatches: {
    urlLabel: 'swatches',
    content: <div>this is swatches</div>,
    theme: dark
  }
};
