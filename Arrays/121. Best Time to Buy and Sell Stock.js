// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let price of prices) {
    if (minPrice > price) minPrice = price;

    maxProfit = Math.max(price - minPrice, maxProfit);
  }

  return maxProfit;
};
