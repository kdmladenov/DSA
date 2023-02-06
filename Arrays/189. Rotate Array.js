// https://leetcode.com/problems/rotate-array/

const reverseArr = (arr, start, end) => {
  while (start < end) {
    [arr[end], arr[start]] = [arr[start], arr[end]];
    start++;
    end--;
  }
};

const rotate = (nums, k) => {
  k = k % nums.length; // if k is more than length

  reverseArr(nums, 0, nums.length - 1); //reverse the whole array

  reverseArr(nums, 0, k - 1); // reverse the left part to k
  reverseArr(nums, k, nums.length - 1); // reverse the right part from k to the end
};
