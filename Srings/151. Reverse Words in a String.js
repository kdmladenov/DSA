// https://leetcode.com/submissions/detail/529617662/

const reverseWords = (str) => {
  let output = '';
  let counter = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    // if (str[i] === " ")  do nothing
    if (str[i] !== ' ') {
      counter++; // start counting how many letters in that word

      if (
        str[i - 1] == ' ' || // when it encounter the "end of the word"
        i === 0 // or when the i-1 is out of range
      ) {
        output += `${output.length === 0 ? '' : ' '}` + str.slice(i, i + counter); // add sliced string to the output
        counter = 0;
      }
    }
  }
  return output;
};
