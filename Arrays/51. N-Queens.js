// https://leetcode.com/problems/n-queens/description/

const solveNQueens = (n) => {
  const res = [];
  const backtrack = (board = [], r = 0) => {
    if (r === n) res.push(board.map((c) => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));

    for (let c = 0; c < n; c++) {
      if (!board.some((bc, br) => bc === c || bc === c + r - br || bc === c - r + br)) {
        backtrack([...board, c], r + 1);
      }
    }
  };

  backtrack();
  return res;
};
