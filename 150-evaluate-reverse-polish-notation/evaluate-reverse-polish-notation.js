/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];

    for (let i=0; i<tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
                let b = stack.pop();
                let a = stack.pop();
                let result = eval(`${a} ${tokens[i]} ${b}`);
                result = Math.trunc(result);
                stack.push(result);
            } else {
                stack.push(tokens[i]);
            }
    }

    return Number(stack.pop());
};