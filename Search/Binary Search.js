const binarySearch = (nums, target, left, right) => {
  while (left <= right) {
    const mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};
