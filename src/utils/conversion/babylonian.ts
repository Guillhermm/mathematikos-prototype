export const babylonianToInt = (babylonian: string): number => {
  const symbols: { [key: string]: number } = {
    '𒁹': 1, // 1
    '𒁹𒁹': 2, // 2
    '𒁹𒁹𒁹': 3, // 3
    '𒁹𒁹𒁹𒁹': 4, // 4
    '𒁹𒁹𒁹𒁹𒁹': 5, // 5
    '𒁹𒁹𒁹𒁹𒁹𒁹': 6, // 6
    '𒁹𒁹𒁹𒁹𒁹𒁹𒁹': 7, // 7
    '𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹': 8, // 8
    '𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹': 9, // 9
    '𒌑': 10, // 10
  };

  return Array.from(babylonian).reduce((acc, char) => {
    return acc + (symbols[char] || 0);
  }, 0);
};

export const intToBabylonian = (value: number): string => {
  const symbols: { [key: string]: string } = {
    1: '𒁹', // 1
    2: '𒁹𒁹', // 2
    3: '𒁹𒁹𒁹', // 3
    4: '𒁹𒁹𒁹𒁹', // 4
    5: '𒁹𒁹𒁹𒁹𒁹', // 5
    6: '𒁹𒁹𒁹𒁹𒁹𒁹', // 6
    7: '𒁹𒁹𒁹𒁹𒁹𒁹𒁹', // 7
    8: '𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹', // 8
    9: '𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹𒁹', // 9
    10: '𒌑', // 10
  };

  return symbols[value.toString()] || '';
};
