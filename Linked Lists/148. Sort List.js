// https://leetcode.com/problems/sort-list/
// * Time complexity : O(nlog(n)).
// * Space complexity : O(n).

const sortList = (head) => {
  const arr = []; 
  let curr = head;

  //Fill the array
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }

  arr.sort((a, b) => a - b);

  curr = head; // Recalibrate temp again

  for (const n of arr) {
    curr.val = n; //Change list value
    curr = curr.next; //Go next
  }

  return head;
};
