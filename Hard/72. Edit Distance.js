// https://leetcode.com/problems/edit-distance/description/

const minDistance = (w1, w2) => {
  const l1 = w1.length;
  const l2 = w2.length;

  const dp = Array.from({ length: l1 + 1 }, () => new Array(l2 + 1));

  for (let row = 0; row <= l1; row++) dp[row][0] = row;
  for (let col = 0; col <= l2; col++) dp[0][col] = col;

  for (let row = 1; row <= l1; row++) {
    for (let col = 1; col <= l2; col++) {
      dp[row][col] = Math.min(
        dp[row - 1][col] + 1,
        dp[row][col - 1] + 1,
        dp[row - 1][col - 1] + (w1[row - 1] === w2[col - 1] ? 0 : 1)
      );
    }
  }

  return dp[l1][l2];
};
