// https://leetcode.com/problems/coin-change-ii/

const change = (amount, coins) => {
  let amounts = new Array(amount + 1).fill(0);
  amounts[0] = 1;

  for (let coin of coins) {
    for (let j = coin; j <= amount; j++) {
      amounts[j] += amounts[j - coin];
    }
  }
  return amounts[amount];
};
// amounts[j] is the combinations for amount j for not using the current coin
// amounts[j - coin] is is the combinations for using the current coin
