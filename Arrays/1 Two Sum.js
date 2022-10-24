// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const pastValues = {};

  for (let index = 0; index < nums.length; index++) {
    const remainder = target - nums[index];
    const remainderIndex = pastValues[remainder];

    if (remainderIndex !== undefined) {
      return [remainderIndex, index];
    } else {
      pastValues[nums[index]] = index;
    }
  }
};

// console.log(twoSum([2, 7, 11, 15], 9));
