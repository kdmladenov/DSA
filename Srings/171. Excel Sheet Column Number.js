// https://leetcode.com/problems/excel-sheet-column-number/

const titleToNumber = (s) => {
  let columnNumber = 0;
  for (let i = 0; i < s.length; i++) {
    let charLast = s[s.length - 1 - i];

    columnNumber += Math.pow(26, i) * (charLast.charCodeAt(0) - 64);
  }

  return columnNumber;
};
// subtracting from 64 (not 65, ascii of A) to get the value directly
// instead of ascii index
// ex: A = 1 (65 - 64 = 1)
