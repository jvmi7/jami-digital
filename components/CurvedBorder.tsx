import React from 'react';
interface Props {
  color?: string;
}

function CurvedBorder({ color }: Props) {
  return (
    <svg version='1.1' fill={color ? color : 'currentColor'} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50'>
      <g>
        <path
          d='M4.4,48.1L4.4,48.1c-1.4,0-2.5-1.1-2.5-2.5V26.2c0-13.4,10.9-24.3,24.3-24.3h19.4c1.4,0,2.5,1.1,2.5,2.5v0
		c0,1.4-1.1,2.5-2.5,2.5H26.2c-10.7,0-19.3,8.7-19.3,19.3v19.4C6.9,47,5.8,48.1,4.4,48.1z'
        />
      </g>
    </svg>
  );
}

export default CurvedBorder;
