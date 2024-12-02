export const EditionMap = {
  One: 1,
  Four: 4,
  Five: 5,
  Ten: 10,
  Twenty: 20,
  Fourty: 40,
};

export const EditionNameMap = {
  One: 'spectrum',
  Four: 'dark',
  Five: 'light',
  Ten: 'greyscale',
  Twenty: 'pastel',
  Fourty: 'chromatic',
};

const _imagePaths = () => {
  const paths: string[] = [];
  for (const edition in EditionMap) {
    const count = EditionMap[edition as keyof typeof EditionMap];
    for (let i = 1; i <= count; i++) {
      paths.push(`/swatchpepen/previews/${edition}_${i}.png`);
    }
  }
  return paths;
};

export const imagePaths = _imagePaths();

export const fullRows = [
  [
    '/swatchpepen/previews/Fourty_1.png',
    '/swatchpepen/previews/Fourty_2.png',
    '/swatchpepen/previews/Fourty_3.png',
    '/swatchpepen/previews/Fourty_4.png',
  ],
  [
    '/swatchpepen/previews/Twenty_1.png',
    '/swatchpepen/previews/Twenty_2.png',
    '/swatchpepen/previews/Twenty_3.png',
    '/swatchpepen/previews/Twenty_4.png',
  ],
  [
    '/swatchpepen/previews/Ten_1.png',
    '/swatchpepen/previews/Ten_2.png',
    '/swatchpepen/previews/Ten_3.png',
    '/swatchpepen/previews/Ten_4.png',
  ],
  [
    '/swatchpepen/previews/Four_1.png',
    '/swatchpepen/previews/Four_2.png',
    '/swatchpepen/previews/Four_3.png',
    '/swatchpepen/previews/Four_4.png',
  ],
  [
    '/swatchpepen/previews/Five_1.png',
    '/swatchpepen/previews/Five_3.png',
    '/swatchpepen/previews/Five_4.png',
    '/swatchpepen/previews/One_1.png',
  ],
];
