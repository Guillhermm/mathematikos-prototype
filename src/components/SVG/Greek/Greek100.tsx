import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekHundred = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 97.564639 128"
      className={className}
    >
      <g transform="translate(20.087782,131.20462)">
        <g
          className="fill-black"
          transform="matrix(4.3895511,0,0,4.3895511,-97.261595,227.79348)"
        >
          <path d="m 17.581254,-81.784695 h 3.945313 v 11.953125 h 14.335937 v -11.953125 h 3.945313 v 29.160157 H 35.862504 V -66.511257 H 21.526567 v 13.886719 h -3.945313 z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekHundred;
