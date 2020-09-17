interface CharCount {
  [key: string]: number;
}

interface ParsedResponse {
  textLength: {
    withSpaces: number;
    withoutSpaces: number;
  };
  wordCount: number;
  characterCount: Array<CharCount>;
}

const parser = (text: string): ParsedResponse => {
  const removeNonEnglishChars = text
    .replace(/[^A-Za-z]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');

  const reducedString = removeNonEnglishChars
    .split('')
    .reduce((prev: CharCount, curr: string): CharCount => {
      // eslint-disable-next-line no-param-reassign
      prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
      return prev;
    }, {});

  const characterCountArray: Array<CharCount> = [];

  Object.entries(reducedString).forEach((entry): void => {
    characterCountArray.push({
      [entry[0]]: entry[1],
    });
  });

  const wordCount = (str: string) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    str.split(' ').filter((n) => n !== '').length;

  const result = {
    textLength: {
      withSpaces: text.length,
      withoutSpaces: text.replace(/ /g, '').length,
    },
    wordCount: wordCount(text),
    characterCount: characterCountArray,
  };

  return result;
};

export default parser;
