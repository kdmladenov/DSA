// https://leetcode.com/problems/number-of-1-bits/

const hammingWeight = (n) => (n >>> 0).toString(2).match(/1/g)?.length || 0;
