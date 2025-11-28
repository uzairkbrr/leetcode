/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const map = {};

    // Count frequencies and store in a map; 
    for (let char of s) {
        map[char] = (map[char] || 0) + 1;
    }

    // Return first index with freq 1;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) {
            return i;
        }
    }

    return -1;
};
