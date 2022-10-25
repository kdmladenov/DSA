// https://leetcode.com/problems/valid-sudoku/

// // Solution with Set
// const isValidSudoku = (board) => {
//   // new set to include unique strings
//   const set = new Set();

//   for(let r = 0; r < board.length; r++){
//     for (let c = 0; c < board[0].length; c++) {
//       const val = board[r][c];
//       if(val === '.') continue;

//       //formula 
//       const boxIndex = 3 * Math.floor(r / 3) + Math.floor(c / 3);

//       // creates a unique string and checks if the string has already in the Set.
//       const row = `row: ${r}: value: ${val}`;
//       const col = `col: ${c}: value: ${val}`;
//       const box = `box: ${boxIndex}: value: ${val}`;

//       // if exists - false
//       if(set.has(row) || set.has(col) || set.has(box)) return false;

//       set.add(row);
//       set.add(col);
//       set.add(box);
//     };
//   };

//   return true;
// };

// Solution with Object only
const isValidSudoku = (board) => {
  // new map to include unique strings
  const map = {};

  for(let rowIndex = 0; rowIndex < board.length; rowIndex++){
    for (let colIndex = 0; colIndex < board[0].length; colIndex++) {
      const val = board[rowIndex][colIndex];
      
      if(val === '.') continue;
      
      //formula 
      // box - a 3 x 3 sub-box (group of 9 cells)
      const boxIndex = 3 * Math.floor(rowIndex / 3) + Math.floor(colIndex / 3);

      // creates a unique string and checks if the string has already in the {map}.
      const row = `row: ${rowIndex}: value: ${val}`;
      const col = `col: ${colIndex}: value: ${val}`;
      const box = `box: ${boxIndex}: value: ${val}`;

      // if exists - false
      if (map[row] || map[col] || map[box]) return false;

      map[row] = true;
      map[col] = true;
      map[box] = true;
    };
  };

  return true;
};