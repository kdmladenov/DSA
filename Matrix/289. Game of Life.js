// https://leetcode.com/problems/game-of-life/description/

const gameOfLife = (board) => {
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const getNeighbor = (r, c) => ([1, 'will die'].includes(board?.[r]?.[c]) ? 1 : 0);

      // exclude (r,c)
      let neighbors =
        getNeighbor(r, c - 1) +
        getNeighbor(r, c + 1) +
        getNeighbor(r + 1, c) +
        getNeighbor(r + 1, c - 1) +
        getNeighbor(r + 1, c + 1) +
        getNeighbor(r - 1, c) +
        getNeighbor(r - 1, c - 1) +
        getNeighbor(r - 1, c + 1);

      if (board[r][c] === 0 && neighbors === 3) board[r][c] = 'reproduce';
      if (board[r][c] === 1 && (neighbors < 2 || neighbors > 3)) board[r][c] = 'will die';
      // if (cell === 0 && (neighbors === 3 || neighbors === 3)) continue; //do not need it;
    }
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (board[r][c] === 'will die') board[r][c] = 0;
      if (board[r][c] === 'reproduce') board[r][c] = 1;
    }
  }
};
