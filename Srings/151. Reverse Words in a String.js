// https://leetcode.com/problems/reverse-words-in-a-string/

const reverseWords = (str) => {
  let res = '';
  let len = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== ' ') {
      len++;

      if (
        str[i - 1] == ' ' || // when it encounter the "end of the word"
        i === 0 // or when the i-1 is out of range
      ) {
        res += `${res === '' ? '' : ' '}` + str.slice(i, i + len); // add sliced string to the output
        len = 0;
      }
    }
  }
  return res;
};

