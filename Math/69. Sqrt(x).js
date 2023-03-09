// https://leetcode.com/problems/sqrtx/description/

const mySqrt = (x) => {
  let left = 1;
  let right = Math.floor(x / 2) + 1; // Important

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (mid * mid === x) return mid;

    mid * mid > x ? (right = mid - 1) : (left = mid + 1);
  }

  return right;
};
