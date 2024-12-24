import { colorPalettes } from '@/app/charts/constants';
import { Palette } from '@/app/charts/types';

export const getColorFromPalette = (value: number, index: number, palette: Palette) => {
  let paletteIndex = 0;

  if (value <= 14) paletteIndex = 0;
  else if (value <= 28) paletteIndex = 1;
  else if (value <= 42) paletteIndex = 2;
  else if (value <= 56) paletteIndex = 3;
  else if (value <= 70) paletteIndex = 4;
  else if (value <= 84) paletteIndex = 5;
  else paletteIndex = 6;

  if (palette === 'chromatic' || palette === 'pastel' || palette === 'greyscale')
    paletteIndex = index;

  return colorPalettes[palette][paletteIndex];
};

export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
