// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate =  nums => {
  const visitedNums = {};

  for(let i = 0; i < nums.length; i++) {
    if(visitedNums[nums[i]]){
      return true;
    } else {
      visitedNums[nums[i]] = true;
    }
  }

  return false;
};