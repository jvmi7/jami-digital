export type Window = {
  urlLabel: string;
  content: React.ReactNode;
  windowWidth?: number;
  windowHeight?: number;
  theme: WindowThemeType;
};

export type ThemeName = 'light' | 'dark' | 'retro';

export interface WindowProps {
  theme: WindowThemeType;
}

export type WindowThemeType = {
  theme: ThemeName;
  windowBackground: string;
  windowAccent: string;
  windowBorder: string;
  urlTextColor: string;
  closeButtonBackground: string;
  closeButtonBorder: string;
  closeButtonText: string;
  minimizeButtonBackground: string;
  minimizeButtonBorder: string;
  minimizeButtonText: string;
  maximizeButtonBackground: string;
  maximizeButtonBorder: string;
  maximizeButtonText: string;
  contentBackground: string;
  textPrimary: string;
  textSecondary: string;
  dividerColor: string;
};

export type CollectionStat = {
  label: string;
  value: string;
};

export type CollectionMetadataType = {
  name: string;
  description: string;
  imagePath: string;
  imageBackground: string;
  stats?: CollectionStat[];
  buttons: React.ReactNode[];
};
