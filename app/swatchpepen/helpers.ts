import { Edition } from '@/app/swatchpepen/types';
import { EditionNameMap } from './constants';

export const getItemFromPath = (path: string): { edition: Edition; index: string } => {
  // path is like this: /swatchpepen/previews/Fourty_39.png
  // we want to get Fourty and 39 from it

  // Split the path by '/' and get the last segment
  const filename = path.split('/').pop() || '';

  // Split the filename by '_' and remove the .png extension
  const [editionStr, indexWithExt] = filename.split('_');
  const index = indexWithExt?.replace('.png', '');

  // Validate that we have both parts
  if (!editionStr || !index) {
    throw new Error(`Invalid path format: ${path}`);
  }

  return { edition: editionStr as Edition, index };
};

export const getRandomItem = () => {
  const editions: Edition[] = ['One', 'Four', 'Five', 'Ten', 'Twenty', 'Fourty'];
  const randomEdition = editions[Math.floor(Math.random() * editions.length)];

  let randomIndex = 0;
  if (randomEdition === 'One') {
    randomIndex = 1;
  } else if (randomEdition === 'Four') {
    randomIndex = Math.floor(Math.random() * 4) + 1;
  } else if (randomEdition === 'Five') {
    randomIndex = Math.floor(Math.random() * 5) + 1;
  } else if (randomEdition === 'Ten') {
    randomIndex = Math.floor(Math.random() * 10) + 1;
  } else if (randomEdition === 'Twenty') {
    randomIndex = Math.floor(Math.random() * 20) + 1;
  } else if (randomEdition === 'Fourty') {
    randomIndex = Math.floor(Math.random() * 40) + 1;
  }
  console.log('randomItem', randomEdition, randomIndex);
  return { edition: randomEdition, index: randomIndex.toString() };
};

export const getNameFromItem = (edition: Edition, index: string) => {
  const editionName = EditionNameMap[edition];
  return `${editionName} ${index}`;
};
