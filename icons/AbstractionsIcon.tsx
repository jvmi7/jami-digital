import { IconProps } from '@/icons/types';

const AbstractionsIcon = ({
  height = 24,
  width = 24,
  color = 'currentColor',
  enableColor = false,
}: IconProps) => {
  const rectStyles = {
    transition: 'fill 0.2s ease-in-out',
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="12"
        height="5"
        rx="2.5"
        fill={enableColor ? '#00B3FF' : color}
        style={rectStyles}
      />
      <rect
        x="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#86DBFF' : color}
        style={rectStyles}
      />
      <rect
        x="14"
        y="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#86DBFF' : color}
        style={rectStyles}
      />
      <rect
        y="7"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#86DBFF' : color}
        style={rectStyles}
      />
      <rect
        x="7"
        y="7"
        width="12"
        height="5"
        rx="2.5"
        fill={enableColor ? '#00B3FF' : color}
        style={rectStyles}
      />
      <rect
        y="14"
        width="12"
        height="5"
        rx="2.5"
        fill={enableColor ? '#00B3FF' : color}
        style={rectStyles}
      />
    </svg>
  );
};

export default AbstractionsIcon;
