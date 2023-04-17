// https://leetcode.com/problems/largest-rectangle-in-histogram/
// Hard
const largestRectangleArea = function (heights) {
  let maxArea = 0;
  const stack = [];

  heights = [0, ...heights, 0]; // Append shadow rectangle (height = 0) to both side

  for (let i = 0; i < heights.length; i++) {
    while (stack && heights[stack[stack.length - 1]] > heights[i]) {
      const j = stack.pop();
      maxArea = Math.max((i - stack[stack.length - 1] - 1) * heights[j], maxArea);
    }
    stack.push(i);
  }
  return maxArea;
};
