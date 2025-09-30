/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // let words = s.trim().split(" ");
    // return words[words.length - 1].length;


    // 1: Two loop approach
    // let n = s.length - 1;
    // while (n >= 0) {
    //     if (s[n] === " ") {
    //         --n;
    //     } else {
    //         break;
    //     }
    // }

    // let length = 0;
    // while (n >= 0) {
    //     if (s[n] !== " ") {
    //         length++;
    //         --n;
    //     } else {
    //         break;
    //     }
    // }

    // return length;


    // 2: One loop approach
    let n = s.length - 1;
    let length = 0;

    while (n >= 0) {
        if (s[n] != " ") {
            length++;
        } else if (length > 0) {
            break;
        }

        n--;
    }

    return length;
};