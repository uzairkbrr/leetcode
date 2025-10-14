/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = "";
    let depth = 0;

    for (let char of s) {
        if (char === '(') {
            if (depth > 0) result += char; // only add if not outermost
            depth++;
        } else { // char === ')'
            depth--;
            if (depth > 0) result += char; // only add if not outermost
        }
    }

    return result;
};
