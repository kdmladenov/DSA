// https://leetcode.com/problems/find-the-duplicate-number/description/

const findDuplicate = (nums) => {
  if (!nums) return 0;
  let map = {};

  for (let num of nums) {
    if (map[num]) return num;
    else map[num] = true;
  }
};
