/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (!strs.length) return "";

    let answer = "";

    for (let i = 0; i < strs[0].length; i++) {
        const ch = strs[0][i];
        let found = true;

        for (let j = 1; j < strs.length; j++) {
            // If the second word's size is less than the first one, or the character isn't present in the seoncd word. Break;
            if (i >= strs[j].length || strs[j][i] !== ch) {
                found = false;
                break;
            }
        }

        if (!found) break;
        else answer += ch;
    }

    return answer;
        
};