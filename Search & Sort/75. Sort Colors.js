// https://leetcode.com/problems/sort-colors/description/

const sortColors = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let curr = 0;

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  while (curr <= right) {
    if (nums[curr] === 0) {
      swap(left, curr);
      left++;
      curr++;
    } else if (nums[curr] === 2) {
      swap(right, curr);
      right--;
    } else {
      curr++;
    }
  }
};
