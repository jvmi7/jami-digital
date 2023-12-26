import { IconProps } from './types';

const MirrorIcon = ({ height = 24, width = 24, color = 'white' }: IconProps) => {
  return (
    <svg fill={color} height={height} width={width} version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 32 32'>
      <g id='XMLID_00000020358696748808805660000004996187332014284169_'>
        <path d='M5.6,31V11.4C5.6,5.7,10.2,1,16,1c5.8,0,10.4,4.7,10.4,10.4V31H5.6z' />
      </g>
    </svg>
  );
};

export { MirrorIcon };
