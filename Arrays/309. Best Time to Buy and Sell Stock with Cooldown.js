// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/

const maxProfit = (prices) => {
  let buy = prices[0];
  let sell = 0;
  let rest = 0;

  for (let price of prices) {
    buy = Math.min(buy, price - rest);
    rest = Math.max(rest, sell);
    sell = Math.max(sell, price - buy);
  }

  return sell;
};
