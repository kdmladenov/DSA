// https://leetcode.com/problems/3sum

const threeSum = (nums) => {
  nums.sort((a, b) => a - b); //works on sorted array
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let remainderToZero = 0 - nums[i];
    let left = i + 1; // Important left = i + 1;
    let right = nums.length - 1;

    if (i > 0 && nums[i] === nums[i - 1]) continue; // To eliminate duplicates due to remainderToZero

    while (left < right) {
      if (nums[left] + nums[right] === remainderToZero) {
        res.push([nums[i], nums[left], nums[right]]);

        left++; // could be right++ as well

        while (nums[left] === nums[left - 1]) left++; // To eliminate duplicates due to duplicated pointer(chosen left above)
      } else nums[left] + nums[right] < remainderToZero ? left++ : right--;
    }
  }

  return res;
};
