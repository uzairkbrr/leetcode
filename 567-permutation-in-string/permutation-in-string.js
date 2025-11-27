/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;

    let hashString = Array(26).fill(0);
    let hashWindow = Array(26).fill(0);
    let windowSize = s1.length;

    // Fill initial frequencies
    for (let i = 0; i < windowSize; i++) {
        hashString[s1.charCodeAt(i) - 97]++;
        hashWindow[s2.charCodeAt(i) - 97]++;
    }

    // Sliding window
    let i = 0;
    for (let j = windowSize; j < s2.length; j++) {
        if (isHashSame(hashString, hashWindow)) return true;

        // Slide window
        hashWindow[s2.charCodeAt(i) - 97]--; // remove left char
        i++;
        hashWindow[s2.charCodeAt(j) - 97]++; // add right char
    }

    // Check final window
    return isHashSame(hashString, hashWindow);
};


var isHashSame = function(h1, h2) {
    for (let i = 0; i < 26; i++) {
        if (h1[i] !== h2[i]) return false;
    }
    return true;
};
