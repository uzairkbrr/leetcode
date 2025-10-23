/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let map = {};

    // Find frequency
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    // Find max odd and min even frequencies
    let oddFreq = 0;
    let evenFreq = Infinity;

    for (let key in map) {
        if (map[key] % 2 !== 0) {
            if (map[key] > oddFreq) {
                oddFreq = map[key];
            }
        } else {
            if (map[key] < evenFreq) {
                evenFreq = map[key];
            }
        }
    }

    return oddFreq - evenFreq;
};
