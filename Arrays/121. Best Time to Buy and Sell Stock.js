// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let maxProfit = 0;
  let cheapestPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    if (cheapestPrice > price) {
      cheapestPrice = price;
    }

    maxProfit = Math.max(price - cheapestPrice, maxProfit);
  }

  return maxProfit;
};
