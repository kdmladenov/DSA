// https://leetcode.com/problems/gas-station/

const canCompleteCircuit = (gas, cost) => {
  let startI = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const consume = gas[i] - cost[i];

    tank += consume;

    if (tank < 0) {
      tank = 0;
      startI = i + 1;
    }

    total += consume;
  }
  return total < 0 ? -1 : startI; // total === 0 --> start
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]));
