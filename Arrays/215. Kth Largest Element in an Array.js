// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = (nums, k) => quickSelect(nums, 0, nums.length - 1, k);

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

const quickSelect = (nums, lo, hi, k) => {
  // put nums that are <= pivot to the left / are  > pivot to the right

  let left = lo;
  let right = lo;

  while (right < hi) {
    if (nums[right] <= nums[hi]) swap(nums, left++, right);
    right++;
  }

  [nums[left], nums[right]] = [nums[right], nums[left]]; // swap

  const m = hi - left + 1; // count the nums that are >= pivot

  if (m === k) return nums[left]; // pivot is the one!

  if (m > k) return quickSelect(nums, left + 1, hi, k); // pivot is too small, so it must be on the right

  return quickSelect(nums, lo, left - 1, k - m); // pivot is too big, so it must be on the left
};
