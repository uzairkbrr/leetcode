/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const freq = {};

    // Count frequencies and store in a map;
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
    }

    let lucky = -1;

    // Check condition;
    for (let num in freq) {
        if (Number(num) === freq[num]) {
            lucky = Math.max(lucky, freq[num]);
        }
    }

    return lucky;
};
