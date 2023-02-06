// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (arr) => {
  const output = arr.map((x) => 1);
  let product = 1;

  //From right to left
  for (let i = 0; i < arr.length; i++) {
    output[i] *= product;
    product *= arr[i];
  }

  product = 1;

  //From left to right
  for (let j = arr.length - 1; j >= 0; j--) {
    output[j] *= product;
    product *= arr[j];
  }

  return output;
};
