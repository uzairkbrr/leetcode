/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let result = n;

    while (!isAllBitsSet(result)) result++;

    return result;
};

var isAllBitsSet = function(x) {
    return ((x & (x + 1)) === 0);
};
