// Loops the array from the start and for each loop brings the lowest value to the start

// Time: O(n^2)
// Space: O(1)

const selectionSort = (array) => {
  //Loop till the second last element
  for (let i = 0; i < array.length - 1; i++) {
    let lowest = i;
    //Loop after the i till the last element
    // skip already sorted minimum (i+1)
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowest] > array[j]) lowest = j;
    }
    // if i is already the lowest - skip
    // set i to be the lowest - swap i and current lowest
    if (i !== lowest) [array[i], array[lowest]] = [array[lowest], array[i]];
  }
  return array;
};

// console.log(selectionSort([1, 8, 2, 4, 5]));
