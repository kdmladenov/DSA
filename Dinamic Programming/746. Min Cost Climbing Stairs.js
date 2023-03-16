// https://leetcode.com/problems/min-cost-climbing-stairs/description/

const minCostClimbingStairs = (cost) => {
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 2], cost[i - 1]);
  }
  return Math.min(cost.pop(), cost.pop());
};
