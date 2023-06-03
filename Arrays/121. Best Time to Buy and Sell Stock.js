// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];

  for (let price of prices) {

    min = Math.min(min, price);

    profit = Math.max(price - min, profit);
  }

  return profit;
};
