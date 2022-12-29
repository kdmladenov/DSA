// Loops the array starting from the second (index 1) expanding the sorted subarray and inserting the current value to the corrent spot at each loop

// Good for nearly sorted array
// Goo if newly data is added

// Time: O(n^2)
// Space: O(1)

const insertionSort = (array) => {
  // Loop the array starting from the second (index 1)
  for (let i = 1; i < array.length; i++) {
    //Crate a temp value
    let currentVal = array[i];
    let j = i - 1;
    // Loop backwards from i - 1 to the start and compare the next (i) item
    // until array[j] > currentVal or end
    while (j >= 0 && array[j] > currentVal) {
      // Copy the value of j to j+1 (next) until array[j] > currentVal
      array[j + 1] = array[j];
      j--;
    }
    // Insert the current value to the correct spot (after the loop ends)
    array[j + 1] = currentVal;
  }
  return array;
};

// console.log(insertionSort([94, 3, 63, 6, 77, 2]));
