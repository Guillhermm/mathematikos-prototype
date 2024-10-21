import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekOne = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 17.318155 128"
      className={className}
    >
      <g transform="translate(-44.428777,16.630278)">
        <g
          style={{ fill: '#fff' }}
          transform="matrix(4.3895513,0,0,4.3895513,-179.94398,-160.56208)"
        >
          <path d="m 51.115192,32.789639 h 3.945313 v 29.160156 h -3.945313 z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekOne;
