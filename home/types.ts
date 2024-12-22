export type InteractiveCanvasMetadata = {
  rows: number;
  cols: number;
  gap: number;
  shapeSize: number;
  rowColorOffset: number;
};

export type ProjectMetadata = {
  theme: {
    background: string;
    card: string;
    text: string;
    buttonBackground: string;
    buttonTextColor: string;
  };
  title: string;
  description: string;
  tags: string[];
  previewUrl: string;
  items: string[];
  itemUrls: string[];
  buttons: {
    text: string;
    link?: string;
    target?: string;
    showIcon?: boolean;
  }[];
  socialLinks: {
    icon: JSX.Element;
    href: string;
  }[];
};
