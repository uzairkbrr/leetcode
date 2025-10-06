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
        if (s[i] == "L") l++;

        if (r == l) pairs++;
    }

    return pairs;
};