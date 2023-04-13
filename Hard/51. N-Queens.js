// https://leetcode.com/problems/n-queens/description/

const solveNQueens = (n) => {
  const res = [];
  const backtrack = (board, row) => {
    if (row === n) res.push(board.map((c) => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));

    for (let col = 0; col < n; col++) {
      if (!board.some((bc, br) => bc === col || bc === col + row - br || bc === col - row + br)) {
        backtrack([...board, col], row + 1);
      }
    }
  };

  backtrack([], 0);
  return res;
};


console.log(solveNQueens(4));