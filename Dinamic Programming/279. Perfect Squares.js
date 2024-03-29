// https://leetcode.com/problems/perfect-squares/

const numSquares = (n) => {
  const dp = [0];

  for (let i = 1; i <= n; i++) {
    dp[i] = Infinity;

    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1); // The smallest amount of squares is either what we already have, or what we can build with a new square and remainder
    }
  }

  return dp[n];
};