// https://leetcode.com/problems/daily-temperatures/description/

const dailyTemperatures = (temps) => {
  let stack = [];
  let result = new Array(temps.length).fill(0);

  for (let i = 0; i < temps.length; i++) {
    while (temps[i] > temps[stack[stack?.length - 1]]) {
      let temp = stack.pop();
      result[temp] = i - temp;
    }
    stack.push(i);
  }
  return result;
};
