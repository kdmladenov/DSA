// https://leetcode.com/problems/sum-of-two-integers/

const getSum = (a, b) => {
  const sum = a ^ b; // XOR derives the sum bits, without carry
  const carry = (a & b) << 1; // AND derives the carry bits

  if (!carry) return sum;

  return getSum(sum, carry);
};
