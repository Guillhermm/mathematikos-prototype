import React from 'react';
import BabylonianOne from './Babylonian/Babylonian1';
import BabylonianTen from './Babylonian/Babylonian10';

type BabylonianSymbolProps = {
  value: number;
  className?: string;
};

const BabylonianSymbol = ({ value, className }: BabylonianSymbolProps) => {
  // SVG mapping table.
  const babylonianMap: { [key: number]: JSX.Element } = {
    0: <></>,
    1: <BabylonianOne />,
    10: <BabylonianTen />,
  };

  const intToBabylonian = (num: number): number[] => {
    const result: number[] = [];

    let parts = 0;
    while (Math.pow(60, parts) < num) {
      parts++;
    }

    for (let i = parts - 1; i >= 0; i--) {
      const factor = Math.pow(60, i);
      const ten = 10 * factor;
      const one = 1 * factor;

      while (num >= ten) {
        result.push(10);
        num -= ten;
      }

      while (num >= one) {
        result.push(1);
        num -= one;
      }

      if (i !== 0) {
        result.push(0);
      }
    }

    return result;
  };

  const babylonianSymbols = intToBabylonian(value);

  return (
    <div className="babylonian-number">
      {babylonianSymbols.map((symbol, index) => (
        <div
          key={index}
          className={`babylonian-char feather feather-layers ${className}`}
        >
          {babylonianMap[symbol]}
        </div>
      ))}
    </div>
  );
};

export default BabylonianSymbol;
