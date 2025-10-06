/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");
    
    // Jump 2k each time
    for (let i = 0; i < s.length; i = i + (2 * k)) {
        // Reverse k elements
        let mid = Math.floor(k / 2);
        for (let j = 0; j < mid; j++) {
            let temp = s[i + j];
            s[i + j] = s[i + k - j - 1];
            s[i + k - j - 1] = temp;
        }
    }
    
    return s.join("");
};