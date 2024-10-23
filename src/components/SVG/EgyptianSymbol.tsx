import React from 'react';
import EgyptianOne from './Egyptian/Egyptian1';
import EgyptianTen from './Egyptian/Egyptian10';
import EgyptianHundred from './Egyptian/Egyptian100';
import EgyptianThousand from './Egyptian/Egyptian1000';
import EgyptianTenThousand from './Egyptian/Egyptian10000';
import EgyptianHundredThousand from './Egyptian/Egyptian100000';
import EgyptianMillion from './Egyptian/Egyptian1000000';
import { EgyptianSymbolBaseProps } from './Egyptian/types';

interface EgyptianSymbolProps extends EgyptianSymbolBaseProps {
  value: number;
  classNameContainer?: string;
}

const EgyptianSymbol = ({
  value,
  className,
  classNameContainer,
}: EgyptianSymbolProps) => {
  const symbols = [];

  let remaining = value;

  // Process millions.
  while (remaining >= 1000000) {
    symbols.push(
      <EgyptianMillion
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 1000000;
  }

  // Process hundred thousands.
  while (remaining >= 100000) {
    symbols.push(
      <EgyptianHundredThousand
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 100000;
  }

  // Process ten thousands.
  while (remaining >= 10000) {
    symbols.push(
      <EgyptianTenThousand
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 10000;
  }

  // Process thousands.
  while (remaining >= 1000) {
    symbols.push(
      <EgyptianThousand
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 1000;
  }

  // Process hundreds.
  while (remaining >= 100) {
    symbols.push(
      <EgyptianHundred
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 100;
  }

  // Process tens.
  while (remaining >= 10) {
    symbols.push(
      <EgyptianTen
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 10;
  }

  // Process ones.
  while (remaining >= 1) {
    symbols.push(
      <EgyptianOne
        key={remaining}
        className={`feather feather-eye ${className}`}
      />
    );
    remaining -= 1;
  }

  return (
    <div className={`egyptian-number ${classNameContainer}`}>{symbols}</div>
  );
};

export default EgyptianSymbol;
