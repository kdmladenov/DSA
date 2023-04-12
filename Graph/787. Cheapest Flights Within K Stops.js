// https://leetcode.com/problems/cheapest-flights-within-k-stops/description/?q=javascript&orderBy=most_votes

const findCheapestPrice = (n, flights, src, dst, k) => {
  let prices = new Array(n).fill(Infinity);
  prices[src] = 0;

  for (let i = 0; i <= k; i++) {
    let tempPrices = [...prices];
    for (let [source, dest, price] of flights) {
      if (prices[source] === Infinity) continue;
      
      tempPrices[dest] = Math.min(tempPrices[dest], prices[source] + price);
    }
    prices = [...tempPrices];
  }

  return prices[dst] === Infinity ? -1 : prices[dst];
};
