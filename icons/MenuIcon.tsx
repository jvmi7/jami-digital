import { IconProps } from './types';

const MenuIcon = ({ width, height, color }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 38"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="11" width="28" height="4" rx="2" fill={color ?? 'currentColor'} />
      <rect x="4" y="23" width="28" height="4" rx="2" fill={color ?? 'currentColor'} />
    </svg>
  );
};

export { MenuIcon };
