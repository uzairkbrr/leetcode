/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let result = new Set(); // to track current substring
    let left = 0;           // left pointer of window
    let answer = 0;

    for (let right = 0; right < s.length; right++) {
        while (result.has(s[right])) {
            result.delete(s[left]);
            left++;
        }
        result.add(s[right]);
        answer = Math.max(answer, right - left + 1);
    }

    return answer;
};
