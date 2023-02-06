// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = (nums) => {
  const visitedNums = {};

  for (let num of nums) {
    if (visitedNums[num]) return true;
    else visitedNums[num] = true;
  }

  return false;
};
