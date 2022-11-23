// https://leetcode.com/problems/house-robber/

const rob = (nums) => {
  let prev = 0;
  let curr = 0;
  let temp;
  for (let x of nums) {
    temp = curr;
    curr = Math.max(x + prev, curr);
    prev = temp;
  }
  return curr;
};
console.log(rob([2, 7, 4, 3, 11]));