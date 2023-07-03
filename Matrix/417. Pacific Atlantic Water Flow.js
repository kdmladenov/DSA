// https://leetcode.com/problems/pacific-atlantic-water-flow/

const pacificAtlantic = (heights) => {
  let rows = heights.length;
  let cols = heights[0].length;
  let pacMap = new Map();
  let atlMap = new Map();
  let res = [];

  const dfs = (r, c, visit, prevHeight) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= rows ||
      c >= cols ||
      heights[r][c] < prevHeight ||
      visit.has(`${r}-${c}`)
    ) {
      return;
    }

    visit.set(`${r}-${c}`, [r, c]);

    dfs(r + 1, c, visit, heights[r][c]); 
    dfs(r - 1, c, visit, heights[r][c]);
    dfs(r, c + 1, visit, heights[r][c]);
    dfs(r, c - 1, visit, heights[r][c]);
  };

  for (let c = 0; c < cols; c++) {
    dfs(0, c, pacMap, heights[0][c]); //Top
    dfs(rows - 1, c, atlMap, heights[rows - 1][c]); //Bottom
  }

  for (let r = 0; r < rows; r++) {
    dfs(r, 0, pacMap, heights[r][0]); //Left
    dfs(r, cols - 1, atlMap, heights[r][cols - 1]); //Right
  }

  for (let [key, cell] of atlMap) {
    if (pacMap.has(key)) res.push(cell);
  }

  return res;
};
