// https://leetcode.com/problems/happy-number/description/

const isHappy = (num) => {
  let set = new Set();

  while (!set.has(num)) {
    set.add(num);
    let str = num.toString();
    num = 0;

    for (let digit of str) num += (+digit) ** 2;

    if (num === 1) return true;
  }
  return false;
};
