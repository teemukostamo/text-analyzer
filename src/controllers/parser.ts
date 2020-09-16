/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable implicit-arrow-linebreak */
interface CharCount {
  [key: string]: number | undefined;
}

interface ParsedResponse {
  textLength: {
    withSpaces: number;
    withoutSpaces: number;
  };
  wordCount: number;
  characterCount: CharCount;
}

const parser = (text: string): ParsedResponse => {
  const replacedText = text.replace(/^[a-z]+$/i, '');
  const getFrequency = (str: string): CharCount =>
    str.split('').reduce((prev: any, curr: any): any => {
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});

  const frequency = getFrequency(replacedText);
  console.log(frequency);

  const result = {
    textLength: {
      withSpaces: text.length,
      withoutSpaces: text.replace(/ /g, '').length,
    },
    wordCount: text.split(' ').length,
    characterCount: frequency,
  };
  console.log('testing result', result);

  return result;
};

export default parser;
