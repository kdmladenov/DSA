// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 5,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 6,
//       left: null,
//       right: {
//         value: 4,
//         left: null,
//         right: null,
//       }
//     },
//     right: null,
//   },
// };

// class BinaryTreeNode {
//   value;
//   left;
//   right;
// }



const findNumberOfNodes = (node) => {
  if (node === null) {
    return 0;
  }

  return 1 + findNumberOfNodes(node.left) + findNumberOfNodes(node.right);
};



const findSumOfNodes = node => {
  if (node === null) {
    return 0;
  }

  return node.value + findSumOfNodes(node.left) + findSumOfNodes(node.right);
};



const findDepthOfTree = (node, depth = 0) => {
  if (node === null) {
    return depth;
  }

  return Math.max(findDepthOfTree(node.left, depth + 1), findDepthOfTree(node.right, depth + 1));
};
