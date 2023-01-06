// Splits the array recursively till arr.length <= 1
// Merges and sorts two pairs of sorted arrays until there is only one array

// Time: O(n log n)
// Space: O(n)

// Works with sorted arrays ONLY
const merge = (arr1, arr2) => {
  let res = [];
  while (arr1.length && arr2.length) {
    // pushes to res and removes from the beginning of the arr the smaller value
    res.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  // if one array still in not empty - merge it with res
  return (res = [...res, ...arr1, ...arr2]);
};

const mergeSort = (arr) => {
  // base case
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

// console.log(mergeSort([43, 2, 11, 57, 6, 9]));
