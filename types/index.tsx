export type Window = {
  urlLabel: string;
  content: React.ReactNode;
  windowWidth?: number;
  windowHeight?: number;
  theme: WindowThemeType;
};

export type WindowThemeType = {
  windowBackground: string;
  windowAccent: string;
  windowBorder: string;
  text: string;
  primaryButtonBackground: string;
  primaryButtonBorder: string;
  primaryButtonText: string;
  secondaryButtonBackground: string;
  secondaryButtonBorder: string;
  secondaryButtonText: string;
  contentBackground: string;
};
