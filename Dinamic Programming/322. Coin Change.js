// https://leetcode.com/problems/coin-change/

const coinChange = (coins, amount) => {
  let dpMinCoins = new Array(amount + 1).fill(Infinity);
  dpMinCoins[0] = 0;

  for (let i = 1; i < dpMinCoins.length; i++) {
    for (let j = 0; j < coins.length; j++) {
      let coinValue = coins[j];
      if (i >= coinValue) {
        dpMinCoins[i] = Math.min(dpMinCoins[i - coinValue] + 1, dpMinCoins[i]);
      }
    }
  }
  const res = dpMinCoins[dpMinCoins.length - 1];
  return res !== Infinity ? res : -1;
};