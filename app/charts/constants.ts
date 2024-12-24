import { Palette } from '@/app/charts/types';

export const scrollElement = 'words';

export const colorPalettes: Record<Palette, string[]> = {
  classic: ['#ff7700', '#ffb200', '#fff000', '#BFF300', '#80F700', '#40FB00', '#00ff00'],
  ice: ['#5000FB', '#2849FD', '#0092FF', '#00AEFF', '#00C9FF', '#00E4FF', '#00FFFF'],
  fire: ['#FF1D00', '#FF5700', '#FF7200', '#FF8D00', '#FFA700', '#FFC200', '#FFDD00'],
  punch: ['#6F00FF', '#9B00FF', '#C600FF', '#F200FF', '#F600AA', '#FB0080', '#FF0056'],
  chromatic: ['#FF0000', '#FF6200', '#FFE300', '#00FF00', '#00CFFF', '#6F00FF', '#F200FF'],
  pastel: ['#FF8080', '#FCAD81', '#FFEC7D', '#78FF78', '#7EEAFC', '#AE7BFF', '#F680FF'],
  greyscale: ['#2C3240', '#4B505D', '#6A6E79', '#898D96', '#A7ABB2', '#C6C9CF', '#E5E7EB'],
  perfect: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
};
