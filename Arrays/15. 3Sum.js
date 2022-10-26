// https://leetcode.com/problems/3sum

const threeSum = (nums) => {
  //works on sorted array
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let remainderToZero = 0 - nums[i];
    let left = i + 1;
    let right = nums.length - 1;

    // To eliminate duplicates due to remainderToZero
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (left < right) {
      if (nums[left] + nums[right] === remainderToZero) {
        res.push([nums[i], nums[left], nums[right]]);
        left++; // could be right++ as well

        // To eliminate duplicates due to duplicated pointer(chosen left above)
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[left] + nums[right] < remainderToZero) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
