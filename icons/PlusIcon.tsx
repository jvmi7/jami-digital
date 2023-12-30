import { IconProps } from './types';

const PlusIcon = ({ height = 24, width = 24, color = 'white' }: IconProps) => {
  return (
    <svg fill={color} height={height} width={width} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
      <path d='M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z'></path>
    </svg>
  );
};

export { PlusIcon };
