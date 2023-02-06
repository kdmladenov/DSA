// https://leetcode.com/problems/first-bad-version/

const solution = (isBadVersion) => (n) => {
  let start = 1;
  let end = n;

  // binary search
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    isBadVersion(mid) ? (end = mid - 1) : (start = mid + 1);
  }

  return start;
};
