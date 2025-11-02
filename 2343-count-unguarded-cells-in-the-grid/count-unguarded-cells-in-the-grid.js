/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
  // make a grid filled with 0 (empty)
  const grid = Array.from({ length: m }, () => Array(n).fill(0));

  // mark guards as 1 and walls as 2
  for (let [r, c] of guards) grid[r][c] = 1;
  for (let [r, c] of walls) grid[r][c] = 2;

  // Directions (up, down, left, right)
  const dirs = [[-1,0],[1,0],[0,-1],[0,1]];

  // for each guard
  for (let [r, c] of guards) {
    for (let [dr, dc] of dirs) {
      let x = r + dr, y = c + dc;
      // keep moving until you hit wall or guard or go out of grid
      while (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] !== 1 && grid[x][y] !== 2) {
        if (grid[x][y] === 0) grid[x][y] = 3; // mark as guarded
        x += dr;
        y += dc;
      }
    }
  }

  // count cells that are still 0 (unguarded)
  let unguarded = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) unguarded++;
    }
  }

  return unguarded;
};