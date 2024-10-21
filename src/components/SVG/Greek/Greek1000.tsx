import React from 'react';
import { GreekSymbolBaseProps } from './types';

const GreekThousand = ({ className }: GreekSymbolBaseProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109.56729 127.99996"
      className={className}
    >
      <g transform="translate(75.213698,159.5935)">
        <g style={{ fill: '#fff' }}>
          <path d="m -69.383827,-159.5935 h 18.604147 l 31.807091,47.58204 31.978558,-47.58204 H 31.610117 L -9.5419149,-98.122654 34.353585,-31.593536 H 15.749438 l -36.008028,-54.440709 -36.265227,54.440709 h -18.689881 l 45.695901,-68.329519 z" />
        </g>
      </g>
    </svg>
  );
};

export default GreekThousand;
