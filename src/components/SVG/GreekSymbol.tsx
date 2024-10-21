import React from 'react';
import GreekOne from './Greek/Greek1';
import GreekTen from './Greek/Greek10';
import GreekHundred from './Greek/Greek100';
import GreekThousand from './Greek/Greek1000';
import GreekTenThousand from './Greek/Greek10000';
import GreekFive from './Greek/Greek5';
import GreekFifty from './Greek/Greek50';
import GreekFiveHundred from './Greek/Greek500';
import GreekFiveThousand from './Greek/Greek5000';
import GreekFiftyThousand from './Greek/Greek50000';
import { GreekSymbolBaseProps } from './Greek/types';

interface GreekSymbolProps extends GreekSymbolBaseProps {
  value: number;
}

const GreekSymbol = ({ value, className }: GreekSymbolProps) => {
  const greekMap: { [key: string]: JSX.Element } = {
    1: <GreekOne className={className} />,
    5: <GreekFive className={className} />,
    10: <GreekTen className={className} />,
    50: <GreekFifty className={className} />,
    100: <GreekHundred className={className} />,
    500: <GreekFiveHundred className={className} />,
    1000: <GreekThousand className={className} />,
    5000: <GreekFiveThousand className={className} />,
    10000: <GreekTenThousand className={className} />,
    50000: <GreekFiftyThousand className={className} />,
  };

  const convertToGreek = (num: number): JSX.Element[] => {
    const symbols: JSX.Element[] = [];

    // Sort the Greek numerals in descending order
    const greekValues = Object.keys(greekMap)
      .map(Number) // Convert string keys to numbers
      .sort((a, b) => b - a); // Sort in descending order

    // Loop over the sorted numerals
    for (const value of greekValues) {
      // While the number is larger than or equal to the value
      while (num >= value) {
        symbols.push(greekMap[value]); // Add the JSX component to symbols array
        num -= value; // Subtract the value from num
      }
    }

    return symbols; // Return the array of JSX elements
  };

  const greekSymbols = convertToGreek(value);

  return (
    <div className="greek-number">
      {greekSymbols.map((symbol, index) => (
        <div key={index} className="greek-char feather feather-layers">
          {symbol}
        </div>
      ))}
    </div>
  );
};

export default GreekSymbol;
