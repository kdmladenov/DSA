// https://leetcode.com/problems/max-area-of-island/description/?q=javascript&orderBy=most_votes

const maxAreaOfIsland = (grid) => {
  let max = 0;
  let rows = grid.length;
  let cols = grid[0].length;

  const dfs = (r, c) => {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] === 0) return 0;

    grid[r][c] = 0;

    return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 1) max = Math.max(max, dfs(r, c));
    }
  }

  return max;
};
