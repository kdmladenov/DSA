// https://leetcode.com/problems/search-in-rotated-sorted-array/

// helper fx() from 153, but we search indexes and not val
const findMinIndex = (rotatedSortedArr) => {
  let left = 0;
  let right = rotatedSortedArr.length - 1;

  if (rotatedSortedArr.length === 1) {
    return 0;
  }

  // still sorted arr
  if (rotatedSortedArr[left] < rotatedSortedArr[right]) {
    return 0;
  }

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let leftVal = rotatedSortedArr[left];
    let midVal = rotatedSortedArr[mid];
    let leftMid = rotatedSortedArr[mid - 1];
    let rightMid = rotatedSortedArr[mid + 1];

    //inflection point eg [3,4, 5,1 ,2]
    if (midVal < leftMid) return mid;
    
    if (midVal > rightMid) return rightMid;
    

    // eg [3,4, 5,1 ,2]
    if (midVal < leftVal) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
};



// helper fx()
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



const search = (nums, target) => {
  const minIndex = findMinIndex(nums);

  const left = binarySearch(nums, target, 0, minIndex - 1);
  const right = binarySearch(nums, target, minIndex, nums.length - 1);

  return Math.max(left, right);
};
