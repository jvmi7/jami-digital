export const EditionMap = {
  One: 1,
  Four: 4,
  Five: 5,
  Ten: 10,
  Twenty: 20,
  Fourty: 40,
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
