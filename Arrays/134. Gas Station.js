// https://leetcode.com/problems/gas-station/

const canCompleteCircuit = (gas, cost) => {
  let start = 0;
  let tank = 0;
  let total = 0;

  for (let i = 0; i < gas.length; i++) {
    const consume = gas[i] - cost[i];

    tank += consume;

    if (tank < 0) {
      tank = 0;
      start = i + 1;
    }

    total += consume;
  }
  return total < 0 ? -1 : start; // total === 0 --> start
};

