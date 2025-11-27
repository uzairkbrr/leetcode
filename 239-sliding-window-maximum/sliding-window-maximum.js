/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let dq = [];
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        // 1. Remove elements out of window
        if (dq.length && dq[0] === i - k) {
            dq.shift();
        }

        // 2. Remove smaller elements (they are useless)
        while (dq.length && nums[dq[dq.length - 1]] < nums[i]) {
            dq.pop();
        }

        // 3. Push current element index
        dq.push(i);

        // 4. Starting from i >= k - 1, record max
        if (i >= k - 1) {
            result.push(nums[dq[0]]);
        }
    }

    return result;
};
