import { IconProps } from '@/icons/types';

const CloseIcon = ({ height = 36, width = 36, color = 'currentColor' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9.51367"
        y="6.68652"
        width="28"
        height="4"
        rx="2"
        transform="rotate(45 9.51367 6.68652)"
        fill={color}
      />
      <rect
        x="29.3125"
        y="9.51465"
        width="28"
        height="4"
        rx="2"
        transform="rotate(135 29.3125 9.51465)"
        fill={color}
      />
    </svg>
  );
};

export { CloseIcon };
