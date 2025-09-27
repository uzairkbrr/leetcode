/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pair = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // If it's an opening bracket, push its corresponding closing bracket onto the stack
        if (pair[char]) {
            stack.push(pair[char]);
        } else {
            // If it's a closing bracket
            // Check if the stack is empty or if the top of the stack doesn't match the current closing bracket
            if (stack.length === 0 || stack.pop() !== char) {
                return false;
            }
        }
    }

    // After iterating through the string, if the stack is empty, all brackets were validly closed
    return stack.length === 0;

};