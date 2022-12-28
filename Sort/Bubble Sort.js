// Loop from the end (backwards) and compares and sort bubbles(pairs) of 2
// For each loop the current max is in the end.
// Loop the rest again, excluding the sorted (with max values) at the end
// Optimized: if nearly sorted and short circuit if no swap in current loop

// Good for nearly sorted array

// Time: O(n^2)
// Space: O(1)

const bubbleSort = (array) => {
  // Loop from the end (backwards)
  for (let i = array.length; i > 0; i--) {
    let noSwapCurrentLoop = true;

    // Loop the rest again, excluding the sorted (with max values) at the end
    for (let j = 0; j < i - 1; j++) {

      // Compares and sort bubbles(pairs) of 2 if not sorted
      if (array[j] > array[j + 1]) {
        noSwapCurrentLoop = false;
        // Sort the pair (bubble) of 2
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    // Short circuit if no swap in current loop
    if (noSwapCurrentLoop) break;
  }

  return array;
};

// console.log(bubbleSort([4, 8, 46, 33, 7, 2]));
// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));
