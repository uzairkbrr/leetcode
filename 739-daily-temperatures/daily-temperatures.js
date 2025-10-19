/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(arr) {
    let stack = [];
    let n = arr.length;
    let answer = Array(n).fill(0);
        
    stack.push(n-1);
    answer[n-1] = 0 // Not required, but for understanding purpose. Already did this on line 8;

    for (let i = n-2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length-1];
            if (arr[i] >= arr[top]) {
                stack.pop();
            } else {
                answer[i] = top - i; // top and i both are the indices of the numbers;
                break;
            }
        }

        if (!stack.length) {
            answer[i] = 0; // no need to write this, but for understanding purpose, it's here;
        }

        stack.push(i);
    }

    return answer;
};