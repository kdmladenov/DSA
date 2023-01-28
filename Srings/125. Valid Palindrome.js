// https://leetcode.com/problems/valid-palindrome/

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  s.toLowerCase().replace(/[\W_]g/, '');

  while (left < right) {
    if (s[left] !== s[right]) return false;

    left++;
    right--;
  }

  return true;
};
