// https://leetcode.com/problems/house-robber-ii

const rob = (nums) => {
  const len = nums.length;
  if (len < 2) return nums[0] || 0;

  const maxes1 = [nums[0], Math.max(nums[0], nums[1])]; // Arr of cumulative max sums - rob first, pass last house
  const maxes2 = [0, nums[1]]; // Arr of cumulative max sums - rob last, pass first house

  for (let i = 2; i < len; i++) {
    maxes1[i] = Math.max(nums[i] + maxes1[i - 2], maxes1[i - 1]);
    maxes2[i] = Math.max(nums[i] + maxes2[i - 2], maxes2[i - 1]);
  }

  return Math.max(maxes1[len - 2], maxes2[len - 1]); // maxes1 w/o last item
};
