import { IconProps } from './types';

const SwatchpepenIcon = ({
  height = 27,
  width = 18,
  enableColor = false,
  className,
}: IconProps) => {
  const rectStyles = {
    transition: 'fill 0.2s ease-in-out',
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.00586 4C8.00586 1.79086 9.79672 0 12.0059 0V0V4H8.00586V4Z"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />

      <path
        d="M12.0059 0V0C14.215 0 16.0059 1.79086 16.0059 4V4H12.0059V0Z"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M8.00586 4H12.0059V8V8C9.79672 8 8.00586 6.20914 8.00586 4V4Z"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M12.0059 4H16.0059V4C16.0059 6.20914 14.215 8 12.0059 8V8V4Z"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M8.00586 4C8.00586 1.79086 9.79672 0 12.0059 0V0V4H8.00586V4Z"
        fill={enableColor ? '#FCE43E' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M12.0059 0V0C14.215 0 16.0059 1.79086 16.0059 4V4H12.0059V0Z"
        fill={enableColor ? '#6FF83D' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M8.00586 4H12.0059V8V8C9.79672 8 8.00586 6.20914 8.00586 4V4Z"
        fill={enableColor ? '#0452F9' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M12.0059 4H16.0059V4C16.0059 6.20914 14.215 8 12.0059 8V8V4Z"
        fill={enableColor ? '#7140F9' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M0.00585938 0H4.00586V4H0.00585938V0Z"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M4.00586 0V0C6.215 0 8.00586 1.79086 8.00586 4V4H4.00586V0Z"
        fill={enableColor ? '#F28A29' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M0.00585938 4H4.00586V8V8C1.79672 8 0.00585938 6.20914 0.00585938 4V4Z"
        fill={enableColor ? '#69F5FE' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M4.00586 4H8.00586V4C8.00586 6.20914 6.215 8 4.00586 8V8V4Z"
        fill={enableColor ? '#3FA4FB' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="8.00586"
        y="8"
        width="4"
        height="4"
        fill={enableColor ? '#F28A29' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M12.0059 8H16.0059V12H12.0059V8Z"
        fill={enableColor ? '#FCE43E' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="8.00586"
        y="12"
        width="4"
        height="4"
        fill={enableColor ? '#3FA4FB' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M12.0059 12H16.0059V12C16.0059 14.2091 14.215 16 12.0059 16V16V12Z"
        fill={enableColor ? '#0452F9' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M0.00585938 8H4.00586V12H0.00585938V8Z"
        fill={enableColor ? '#ED46E8' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="4.00586"
        y="8"
        width="4"
        height="4"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M0.00585938 12H4.00586V16V16C1.79672 16 0.00585938 14.2091 0.00585938 12V12Z"
        fill={enableColor ? '#6FF83D' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="4.00586"
        y="12"
        width="4"
        height="4"
        fill={enableColor ? '#69F5FE' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="8"
        y="24"
        width="4"
        height="4"
        transform="rotate(-180 8 24)"
        fill={enableColor ? '#ED46E8' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M4 24L0 24V24C1.93129e-07 21.7909 1.79086 20 4 20V20L4 24Z"
        fill={enableColor ? '#7140F9' : 'currentColor'}
        style={rectStyles}
      />
      <path
        d="M16 24L12 24L12 20V20C14.2091 20 16 21.7909 16 24V24Z"
        fill={enableColor ? '#F28A29' : 'currentColor'}
        style={rectStyles}
      />
      <rect
        x="12"
        y="24"
        width="4"
        height="4"
        transform="rotate(-180 12 24)"
        fill={enableColor ? '#FF2626' : 'currentColor'}
        style={rectStyles}
      />
    </svg>
  );
};

export default SwatchpepenIcon;
