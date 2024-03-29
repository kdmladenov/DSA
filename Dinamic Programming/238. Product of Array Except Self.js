// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (arr) => {
  const res = arr.map((x) => 1);
  let product = 1;

  //From right to left
  for (let i = 0; i < arr.length; i++) {
    res[i] *= product;
    product *= arr[i];
  }

  product = 1;

  //From left to right
  for (let j = arr.length - 1; j >= 0; j--) {
    res[j] *= product;
    product *= arr[j];
  }

  return res;
};
