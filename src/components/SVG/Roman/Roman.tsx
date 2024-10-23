import React from 'react';
import { RomanSymbolBaseProps } from './types';

const Roman = ({ value, className }: RomanSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Garamond"
        fontSize="24"
      >
        {value}
      </text>
    </svg>
  );
};

export default Roman;
