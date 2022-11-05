// https://leetcode.com/problems/rotate-array/

// https://www.youtube.com/watch?v=NNkSsmZYU7s&list=PLxy-WF_rtHsEWy9rMI0WmQ1b0OBSFuuBm&index=25

const helperRotate = (arr, start, end) => {
  while(start < end){
    [arr[end], arr[start]] = [arr[start], arr[end]];
    start++;
    end--;
  }
}

const rotate = (nums, k) => {
  // if k is more than length
  k = k % nums.length;

  // first rotate the whole array 
  helperRotate(nums, 0, nums.length - 1);
  // then rotate the two parts from n-th element
  helperRotate(nums, 0, k - 1);
  helperRotate(nums, k, nums.length - 1);
};