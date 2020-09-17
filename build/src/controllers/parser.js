"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser = (text) => {
    const removeNonEnglishChars = text
        .replace(/[^A-Za-z]/g, '')
        .split('')
        .sort()
        .join('');
    const reducedString = removeNonEnglishChars
        .split('')
        .reduce((prev, curr) => {
        // eslint-disable-next-line no-param-reassign
        prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
        return prev;
    }, {});
    const characterCountArray = [];
    Object.entries(reducedString).forEach((entry) => {
        characterCountArray.push({
            [entry[0]]: entry[1],
        });
    });
    const wordCount = (str) => 
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
exports.default = parser;
