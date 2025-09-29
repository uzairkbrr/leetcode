/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length; i++) {
        let j = 0;
        while (j < needle.length && haystack[i + j] === needle[j]) {
            j++;
        }

        // found full match
        if (j === needle.length) {
            return i; 
        }
    }

    // not found
    return -1; 
}
