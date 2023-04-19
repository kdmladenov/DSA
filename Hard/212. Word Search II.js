// https://leetcode.com/problems/word-search-ii/

// https://leetcode.com/problems/word-search-ii/discuss/591116/javascript-Backtracking-with-Trie-comments-%2B-video

// Hard

const findWords = (board, words) => {
  let res = [];

  const root = buildTrie(words);
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      dfs(root, row, col, board, res);
    }
  }
  return res;
};

const dfs = (node, row, col, board, res) => {
  if (node.end) {
    res.push(node.end);
    node.end = null; // make sure only print one time for each word
  }

  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) return;
  if (!node[board[row][col]]) return;

  const temp = board[row][col];
  board[row][col] = ''; // mark visited

  dfs(node[c], row + 1, col, board, res);
  dfs(node[c], row - 1, col, board, res);
  dfs(node[c], row, col + 1, board, res);
  dfs(node[c], row, col - 1, board, res);

  board[row][col] = temp;
};

function buildTrie(words) {
  const root = {};
  for (let w of words) {
    let pointer = root; // here 'pointer' just a reference, that we use to go down from root till last child node
    // and when we rich last child node - this is the end of the world
    // and instead of setting "node.end = true", we set "node.end = word"
    for (let c of w) {
      if (!pointer[c]) pointer[c] = {}; // if we already have such node, lets ignore it creating and just move the pointer
      pointer = pointer[c];
    }
    pointer.end = w;
  }
  return root;
}
