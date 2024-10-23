import React from 'react';
import Roman from './Roman/Roman';
import { intToRoman } from '../../utils/conversion/roman';
import { RomanSymbolBaseProps } from './Roman/types';

type RomanSymbolProps = Pick<RomanSymbolBaseProps, 'className'> & {
  value: number;
  classNameContainer?: string;
};

const RomanSymbol = ({
  value,
  className,
  classNameContainer,
}: RomanSymbolProps) => {
  const romanMap: { [key: string]: JSX.Element } = {
    I: <Roman value="I" />,
    V: <Roman value="V" />,
    X: <Roman value="X" />,
    L: <Roman value="L" />,
    C: <Roman value="C" />,
    D: <Roman value="D" />,
    M: <Roman value="M" />,
  };

  const romanString = intToRoman(value);

  return (
    <div className={`roman-number ${classNameContainer}`}>
      {romanString.split('').map((char, index) => (
        <div key={index} className={`roman-char ${className}`}>
          {romanMap[char]}
        </div>
      ))}
    </div>
  );
};

export default RomanSymbol;
