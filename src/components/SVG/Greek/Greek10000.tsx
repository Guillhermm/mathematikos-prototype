import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekTenThousand = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 117.11184 128"
      className={className}
    >
      <g transform="translate(115.62416,203.76966)">
        <g
          className="fill-black"
          transform="matrix(4.3895507,0,0,4.3895507,193.43568,473.75635)"
        >
          <path d="m -70.408081,-154.34974 h 5.878906 l 7.441406,19.84375 7.480469,-19.84375 h 5.878906 v 29.16016 h -3.847656 v -25.60547 l -7.519531,20 h -3.964844 l -7.519531,-20 v 25.60547 h -3.828125 z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekTenThousand;
