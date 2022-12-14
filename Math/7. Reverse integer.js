const reverse = (x) => {
  let reversed = 0;

  while (x !== 0) {
    reversed = reversed * 10 + (x % 10);
    // !!! Must use parseInt
    x = parseInt(x / 10);
  }

  return reversed > Math.pow(2, 31) || reversed < Math.pow(-2, 31) ? 0 : reversed;
};