import { IconProps } from './types';

const MinusIcon = ({ height = 24, width = 24, color = 'white' }: IconProps) => {
  return (
    <svg fill={color} height={height} width={width} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M5 11V13H19V11H5Z'></path>
    </svg>
  );
};

export { MinusIcon };
