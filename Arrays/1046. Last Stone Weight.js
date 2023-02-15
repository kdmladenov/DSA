// https://leetcode.com/problems/last-stone-weight/description/?q=javascript&orderBy=most_votes

const lastStoneWeight = (stones) => {
  if (stones.length < 2) return stones;

  stones.sort((a, b) => a - b).push(Math.abs(stones.pop() - stones.pop()));

  return lastStoneWeight(stones);
};
