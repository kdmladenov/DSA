// https://leetcode.com/problems/hand-of-straights

const isNStraightHand = (hand, groupLen) => {
  if (hand.length % groupLen) return false;

  hand.sort((a, b) => a - b); // Important, map is iterative

  const map = new Map();
  for (let num of hand) map.set(num, map.get(num) + 1 || 1);

  for (const [firstCard, firstFreq] of map) {
    if (firstFreq === 0) continue;

    // !! Important
    for (let card = firstCard; card < firstCard + groupLen; card++) {
      const currFreq = map.get(card) || 0;
      if (currFreq < firstFreq) return false; // non consecutive cards
      map.set(card, currFreq - firstFreq);
    }
  }
  return true;
};
// firstFreq should be less or equal to currFreq
// e.g [1,2,3], [1,2,3], [2,3,4] , map = {1->2, 2->3, 3->3, 4->1}
// if freq of 1 is more than freq of 2 then return false - not consecutive

