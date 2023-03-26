// https://leetcode.com/problems/sort-an-array/description/

// Merge sort

const merge = (arr1, arr2) => {
  let res = [];
  let i1 = 0;
  let i2 = 0;

  while (i1 < arr1.length && i2 < arr2.length) {
    curr1 = arr1[i1];
    curr2 = arr2[i2];

    res.push(curr1 < curr2 ? curr1 : curr2);
    curr1 < curr2 ? i1++ : i2++;
  }
  // if one array still in not empty - merge it with res
  return [...res, ...arr1.slice(i1), ...arr2.slice(i2)];
};

const sortArray = (nums) => {
  if (nums.length <= 1) return nums;

  const mid = Math.floor(nums.length / 2);

  const left = sortArray(nums.slice(0, mid));
  const right = sortArray(nums.slice(mid));

  return merge(left, right);
};

// Time: O(n log n)
// Space: O(n)
