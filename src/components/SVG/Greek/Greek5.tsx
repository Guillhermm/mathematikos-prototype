import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekFive = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.564638 128"
      className={className}
    >
      <g transform="translate(-14.232877,43.477981)">
        <g
          className="fill-black"
          transform="matrix(4.3895512,0,0,4.3895512,-213.59321,-69.560432)"
        >
          <path d="M 74.128471,5.9419403 V 35.102097 H 70.183159 V 9.2622528 H 55.847221 V 35.102097 H 51.901909 V 5.9419403 Z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekFive;
