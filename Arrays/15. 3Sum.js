// https://leetcode.com/problems/3sum

const threeSum = (nums) => {
  //works on sorted array
  nums.sort((a, b) => a - b);
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    let remainderToZero = 0 - nums[i];
    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    // To eliminate duplicates due to remainderToZero
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    while (leftPointer < rightPointer) {
      if (nums[leftPointer] + nums[rightPointer] === remainderToZero) {
        res.push([nums[i], nums[leftPointer], nums[rightPointer]]);
        leftPointer++; // could be rightPointer++ as well

        // To eliminate duplicates due to duplicated pointer(chosen left above)
        while (nums[leftPointer] === nums[leftPointer - 1]) {
          leftPointer++;
        }
      } else if (nums[leftPointer] + nums[rightPointer] < remainderToZero) {
        leftPointer++;
      } else {
        rightPointer--;
      }
    }
  }

  return res;
};
