// https://leetcode.com/problems/car-fleet/description/?q=javascript&orderBy=most_votes

const carFleet = (target, position, speed) => {
  let pairs = position.map((pos, i) => [pos, speed[i]]);

  pairs.sort((a, b) => b[0] - a[0]); // sort the array by position

  let stack = [];

  for (let [pos, speed] of pairs) {
    stack.push((target - pos) / speed); // formula to calcuate time for each car to reach destination (target - position/speed)
    
    if (stack?.[stack.length - 1] <= stack?.[stack.length - 2]) stack.pop(); //if cars collide remove the car whose starting position is less. (i.e last pushed car)
  }
  return stack.length;
};
