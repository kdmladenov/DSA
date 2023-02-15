// https://leetcode.com/problems/koko-eating-bananas/description/?q=javascript&orderBy=most_votes

const minEatingSpeed = (piles, h) => {
  let min = 1;
  let max = Math.max(...piles);
  let best = max;

  const time = (speed) => piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (time(mid) <= h) best = mid;

    time(mid) <= h ? (max = mid - 1) : (min = mid + 1);
  }

  return best;
};
