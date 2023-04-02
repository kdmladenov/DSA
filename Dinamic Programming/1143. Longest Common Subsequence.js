// https://leetcode.com/problems/longest-common-subsequence/

const longestCommonSubsequence = (s1, s2) => {
  let dp = new Array(s1.length + 1).fill(0).map(() => new Array(s2.length + 1).fill(0));

  for (let i = 1; i < s1.length + 1; i++) {
    for (let j = 1; j < s2.length + 1; j++) {
      dp[i][j] =
        s1[i - 1] === s2[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[s1.length][s2.length];
};
