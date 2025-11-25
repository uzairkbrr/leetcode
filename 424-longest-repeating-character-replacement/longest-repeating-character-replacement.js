/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let map = {};
    let i = 0, j = 0;
    let maxWindow = 0;

    while (j < s.length) {
        map[s[j]] = (map[s[j]] || 0) + 1;

        if (isWindowValid(map, k)) {
            maxWindow = Math.max(maxWindow, j - i + 1);
            j++;
        } else {
            map[s[i]]--;
            i++;
            j++;
        }
    }

    return maxWindow;
};

var isWindowValid = function(map, k) {
    let total = 0;
    let maxCount = 0;

    for (let c in map) {
        total += map[c];
        maxCount = Math.max(maxCount, map[c]);
    }

    return total - maxCount <= k;
};
