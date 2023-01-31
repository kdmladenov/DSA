// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let price of prices) {
    if (cheapestPrice > price) cheapestPrice = price;

    maxProfit = Math.max(price - cheapestPrice, maxProfit);
  }

  return maxProfit;
};
