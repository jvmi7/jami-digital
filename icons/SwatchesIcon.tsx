import { IconProps } from './types';

const SwatchesIcon = ({ height = 24, width = 24, enableColor = false, className }: IconProps) => {
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
      className={className}
    >
      <rect
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#EE391C' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="7"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#F28A29' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#FCE43E' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        y="7"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#6FF83D' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="7"
        y="7"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#69F5FE' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="14"
        y="7"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#3FA4FB' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        y="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#0452F9' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="7"
        y="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#7140F9' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="14"
        y="14"
        width="5"
        height="5"
        rx="2.5"
        fill={enableColor ? '#ED46E8' : 'currentColor'}
        style={rectStyles}
      />
    </svg>
  );
};

export { SwatchesIcon };
