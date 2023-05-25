// https://leetcode.com/problems/k-closest-points-to-origin/description/?q=javascript&orderBy=most_votes

const kClosest = (points, K) => {
  points.sort((a, b) => 
  Math.sqrt(a[0] ** 2 + a[1] ** 2) - 
  Math.sqrt(b[0] ** 2 + b[1] ** 2));

  return points.slice(0, K);
};
