export type Window = {
  urlLabel: string;
  content: React.ReactNode;
  windowWidth?: number;
  windowHeight?: number;
  theme: WindowThemeType;
};

export type ThemeName = 'light' | 'dark';

export type WindowThemeType = {
  theme: ThemeName;
  windowBackground: string;
  windowAccent: string;
  windowBorder: string;
  urlTextColor: string;
  primaryButtonBackground: string;
  primaryButtonBorder: string;
  primaryButtonText: string;
  secondaryButtonBackground: string;
  secondaryButtonBorder: string;
  secondaryButtonText: string;
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
  stats: CollectionStat[];
  buttons: React.ReactNode[];
};
