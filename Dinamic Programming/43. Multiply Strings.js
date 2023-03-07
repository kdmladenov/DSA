// https://leetcode.com/problems/multiply-strings/description/

const multiply = (num1, num2) => {
  if (!+num1 || !+num2) return '0';

  const dp = Array(num1.length + num2.length).fill(0);

  for (let i = num1.length - 1; i >= 0; i--) {
    for (let j = num2.length - 1; j >= 0; j--) {
      //Define
      const prevRemainder = dp[i + j + 1];
      const product = num1[i] * num2[j] + prevRemainder;
      const unitsDigit = product % 10;
      const carryOver = Math.floor(product / 10);

      //Update
      dp[i + j + 1] = unitsDigit;
      dp[i + j] += carryOver; // += Important
    }
  }

  return dp.join('').replace(/^0+/, '');
};
