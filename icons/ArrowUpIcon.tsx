import { IconProps } from './types';

const ArrowUpIcon = ({
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
      viewBox="0 0 18 18"
    >
      <path
        d="M9.74965 5.87132V15H8.24965V5.87132L4.22668 9.8943L3.16602 8.83365L8.99965 3L14.8333 8.83365L13.7726 9.8943L9.74965 5.87132Z"
        fill="white"
        stroke="white"
      />
    </svg>
  );
};

export { ArrowUpIcon };
