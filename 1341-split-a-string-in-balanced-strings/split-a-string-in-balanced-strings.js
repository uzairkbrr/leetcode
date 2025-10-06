/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {    
    let pairs = 0;
    let r = 0;
    let l = 0;

    for (let i=0; i < s.length; i++) {
        // If got R, increase a count for R.
        if (s[i] == "R") r++;
        // If got L, increase a count for L.
        if (s[i] == "L") l++;

        // if both are same, that means we got a balanced string, so increase the number of pairs;
        if (r == l) pairs++;
    }

    return pairs;
};