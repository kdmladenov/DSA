// https://leetcode.com/problems/reorder-list/

const reorderList = (head) => {
  const arr = [];
  let temp = head;

  while (temp) {
    arr.push(temp);
    temp = temp.next;
  }

  for (let left = 0; left < arr.length; left++) {
    let right = arr.length - 1 - left;
    if (left >= right) {
      arr[left].next = null;
      break;
    }
    arr[left].next = arr[right];
    arr[right].next = arr[left + 1];
  }
};


// Python

// def reorder_list(head):
//     arr = []
//     temp = head

//     while temp:
//         arr.append(temp)
//         temp = temp.next

//     for left in range(len(arr)):
//         right = len(arr) - 1 - left
//         if left >= right:
//             arr[left].next = None
//             break
//         arr[left].next = arr[right]
//         arr[right].next = arr[left + 1]