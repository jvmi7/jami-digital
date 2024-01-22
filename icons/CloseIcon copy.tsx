import { IconProps } from './types';

const CircleIcon = ({
  height = 24,
  width = 24,
  color = 'white',
}: IconProps) => {
  return (
    <svg
      fill={color}
      height={height}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="12" />
    </svg>
  );
};

export { CircleIcon };
