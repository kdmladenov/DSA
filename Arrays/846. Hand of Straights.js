// https://leetcode.com/problems/hand-of-straights

const isNStraightHand = (hand, groupSize) => {
  if (hand.length % groupSize) return false;

  hand.sort((a, b) => a - b);

  const map = new Map();
  for (let num of hand) map.set(num, map.get(num) + 1 || 1);

  for (const [target, count] of map) {
    if (count === 0) continue;

    // !! Important
    for (let num = target; num < target + groupSize; num++) {
      const freq = map.get(num) || 0;
      if (freq < count) return false;
      map.set(num, freq - count);
    }
  }

  return true;
};
