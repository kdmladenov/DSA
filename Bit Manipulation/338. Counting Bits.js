// https://leetcode.com/problems/counting-bits/

// https://leetcode.com/problems/counting-bits/discuss/853078/typescript-%2B-javascript-3-line-o(n)-beats-100-w-VERY-DETAILED-explanation

const countBits = (num) => {
  let res = [0];

  for (let i = 1; i <= num; i++) {
    const even = i >> 1;
    const odd = i & 1;

    res[i] = res[even] + odd;
  }
  
  return res;
};
