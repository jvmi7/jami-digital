export const getIndexFromPath = (path: string) => {
  // path is like this: /swatchpepen/previews/Fourty_39.png
  // we want to get Fourty and 39 from it

  // Split the path by '/' and get the last segment
  const filename = path.split('/').pop() || '';

  // Split the filename by '_' and remove the .png extension
  const [indexWithExt] = filename.split('_');
  const index = indexWithExt?.replace('.png', '');

  // Validate that we have both parts
  if (!index) {
    throw new Error(`Invalid path format: ${path}`);
  }

  return index;
};

const CustomSwatchesMap: Record<string, string> = {
  '4057': 'mario',
  '469': 'beach',
  '2809': 'grapes',
  '6475': 'sunflower',
  '6865': 'tree',
  '5149': 'patrick',
  '391': 'base',
  '4135': 'mars',
};

export const getNameFromIndex = (index: string) => {
  const name = CustomSwatchesMap[index];

  if (name) {
    return name;
  }

  return index;
};
