// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

const zigzagLevelOrder = (root) => {
  if (!root) return [];

  let result = [];
  let q = [root];
  let level = 0;

  while (q.length) {
    let currLevel = [];
    let size = q.length; // Important

    for (let i = 0; i < size; i++) {
      let node = q.shift();

      currLevel.push(node.val);

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    if (level % 2 === 1) currLevel.reverse();
    result.push(currLevel);

    level++;
  }
  
  return result;
};
