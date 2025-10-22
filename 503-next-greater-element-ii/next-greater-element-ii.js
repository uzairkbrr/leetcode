/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {

    // since the given array is circular, so double it (to make the circular array simple)
    // Given => [1, 2, 3, 4, 5]
    // It become: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
    let normalArray = [...nums, ...nums];
    let n = normalArray.length; // Length of the non-circular array

    let stack = [];
    let answer = Array(n).fill(-1);

    for (let i=n-2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length-1];

            if (normalArray[i] < top) {
                answer[i] = top;
                break;   
            } else {
                stack.pop();
            }
        }

        // no need for this condition, as the array is already filled with -1;
        // if (!stack.length) {
        //     asnwer[i] = -1;
        // }

        stack.push(normalArray[i]);
    }

    return answer.slice(0,n/2);
};