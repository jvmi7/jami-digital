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
  button: {
    text: string;
    link?: string;
  };
  socialLinks: {
    icon: JSX.Element;
    href: string;
  }[];
};
