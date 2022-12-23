// https://leetcode.com/problems/non-overlapping-intervals/

const spiralOrder =  m => {
  const arr = [];

  if(m.length === 0){
    return arr;
  }

  let top = 0;
  let bottom = m.length - 1;
  let left = 0;
  let right = m[0].length - 1;
  let dir = 'right';

  while (top <= bottom && left <= right){
    if (dir === 'right') {
      for (let i = left; i <= right; i++)  arr.push(m[top][i]);
      
      top++;

      dir = 'down';
    } else if (dir === 'down') {
      for (let i = top; i <= bottom; i++) arr.push(m[i][right]);
      
      right--;

      dir = 'left';
    } else if (dir === 'left') {
      for (let i = right; i >= left; i--) arr.push(m[bottom][i]);
      
      bottom--;

      dir = 'up';
    } else if (dir === 'up') {
      for (let i = bottom; i >= top; i--) arr.push(m[i][left]);
      
      left++;
      
      dir = 'right';
    }
  }

  return arr;
};