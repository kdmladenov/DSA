// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let curr = prices[i];

    profit += Math.max(0, curr - prev);
  }

  return profit;
};
