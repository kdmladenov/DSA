// https://leetcode.com/problems/k-closest-points-to-origin/description/?q=javascript&orderBy=most_votes

const kClosest = (points, K) => {
  points.sort(
    (a, b) => 
    Math.sqrt(a[0] * a[0] + a[1] * a[1]) - 
    Math.sqrt(b[0] * b[0] + b[1] * b[1])
  );

  return points.slice(0, K);
};
