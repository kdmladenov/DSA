// https://leetcode.com/problems/interleaving-string/description/

const isInterleave = (s1, s2, s3) => {
  const memo = new Map();

  const check = (i1, i2, i3) => {
    const curr = s3[i3];
    const key = `${i1}-${i2}`;

    if (memo.has(key)) return memo.get(key);
    if (!s1[i1] && !s2[i2] && !curr) return true;
    if (!curr) return false;

    const result =
      s1[i1] === curr && s2[i2] === curr
        ? check(i1 + 1, i2, i3 + 1) || check(i1, i2 + 1, i3 + 1)
        : s1[i1] === curr
        ? check(i1 + 1, i2, i3 + 1)
        : s2[i2] === curr
        ? check(i1, i2 + 1, i3 + 1)
        : false;

    memo.set(key, result);
    return result;
  };

  return check(0, 0, 0);
};