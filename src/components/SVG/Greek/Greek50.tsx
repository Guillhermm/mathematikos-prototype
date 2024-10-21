import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekFifty = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 113.98817 128"
      className={className}
    >
      <g transform="translate(-0.16631603,88.823076)">
        <g
          style={{ fill: '#fff' }}
          transform="matrix(4.7337278,0,0,4.7337278,-213.42139,92.682609)"
        >
          <path d="m 69.200403,-22.583076 v -14.16 c 0,-1.28 -0.16,-1.6 -1.52,-1.6 h -21.04 c -1.36,0 -1.52,0.32 -1.52,1.6 v 23.84 c 0,1.28 0.16,1.6 1.52,1.6 h 1 c 1.36,0 1.52,-0.32 1.52,-1.6 v -22.44 c 0,-1.12 0.24,-1.36 1.32,-1.36 h 13.36 c 1.08,0 1.32,0.24 1.32,1.36 v 12.76 c 0,1.28 0.16,1.6 1.52,1.6 h 1 c 1.36,0 1.52,-0.32 1.52,-1.6 z m -5.52,1.12 -6.24,-13.52 h -0.16 l -6.24,13.52 z m -3.6,-1.2 h -7.4 l 3.64,-8.04 z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekFifty;
