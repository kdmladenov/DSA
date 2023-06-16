// https://leetcode.com/problems/koko-eating-bananas/description/?q=javascript&orderBy=most_votes

const minEatingSpeed = (piles, h) => {
  let minSpeed = 1;
  let maxSpeed = Math.max(...piles);
  let best = maxSpeed;

  const time = (speed) => piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

  while (minSpeed <= maxSpeed) {
    const mid = Math.floor((minSpeed + maxSpeed) / 2);

    if (time(mid) <= h) best = mid;

    time(mid) <= h ? (maxSpeed = mid - 1) : (minSpeed = mid + 1);
  }

  return best;
};


// Python 

// class Solution:
//     def minEatingSpeed(self, piles: List[int], h: int) -> int:
//         min_speed = 1
//         max_speed = max(piles)
//         best = max_speed

//         def time(speed):
//             return sum((pile + speed - 1) // speed for pile in piles)

//         while min_speed <= max_speed:
//             mid = (min_speed + max_speed) // 2

//             if time(mid) <= h:
//                 best = mid
//                 max_speed = mid - 1
//             else:
//                 min_speed = mid + 1

//         return best