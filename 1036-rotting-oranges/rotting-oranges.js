/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let fresh = 0;

    // Step 1: Find all rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            }

            if (grid[r][c] === 1) {
                fresh++;
            }
        }
    }

    // Directions (up, down, left, right)
    const directions = [[1,0], [-1,0], [0,1], [0,-1]];
    let time = 0;

    // Step 2: BFS process
    while (queue.length && fresh > 0) {
        let size = queue.length;
        for(let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for(const [dr, dc] of directions) {
                const newRow = r + dr;
                const newCol = c + dc;

            
                if( newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2; // make it rotten
                    queue.push([newRow, newCol]);
                    fresh--;
                }
            }
        }
        time++;
    }

    return fresh === 0 ? time : -1;
};
