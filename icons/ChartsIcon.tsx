import { IconProps } from '@/icons/types';

const ChartsIcon = ({
  height = 24,
  width = 24,
  color = 'currentColor',
  enableColor = false,
}: IconProps) => {
  const rectStyles = {
    transition: 'fill 0.2s ease-in-out',
  };

  return (
    <svg width={width} height={height} viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
      <rect
        y="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#FFE100' : color}
        style={rectStyles}
      />
      <rect
        x="7"
        y="7"
        width="5"
        height="12"
        rx="2.5"
        fill={enableColor ? '#D9FF00' : color}
        style={rectStyles}
      />
      <rect
        x="14"
        width="5"
        height="19"
        rx="2.5"
        fill={enableColor ? '#99FF00' : color}
        style={rectStyles}
      />
    </svg>
  );
};

export default ChartsIcon;
