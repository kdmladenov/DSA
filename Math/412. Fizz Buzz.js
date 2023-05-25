// https://leetcode.com/problems/fizz-buzz/

const fizzBuzz = (n) => {
  const res = [];

  for (let i = 1; i <= n; i++) {
    res.push(
    i % 15 === 0 ? 'FizzBuzz' : 
    i % 3 === 0 ? 'Fizz' : 
    i % 5 === 0 ? 'Buzz' : `${i}`
    );
  }

  return res;
};
