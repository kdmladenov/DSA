// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = (prices) => {
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    let prev = prices[i - 1];
    let curr = prices[i];

    if (curr > prev) profit += curr - prev;
  }

  return profit;
};
