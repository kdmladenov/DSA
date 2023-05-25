// https://leetcode.com/problems/count-primes/

const countPrimes = (n) => {
  let isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i ** 2 < n; i++) {
    if (!isPrime[i]) continue;

    for (let j = i ** 2; j < n; j += i) isPrime[j] = false;
  }

  return isPrime.filter((i) => i === true).length;
};
