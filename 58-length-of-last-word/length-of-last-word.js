/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let words = s.trim().split(" ");
    // return words[words.length - 1].length;


    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] === " ") {
            --n;
        } else {
            break;
        }
    }

    let length = 0;
    while (n >= 0) {
        if (s[n] !== " ") {
            length++;
            --n;
        } else {
            break;
        }
    }

    return length;
};