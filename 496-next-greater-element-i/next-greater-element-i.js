/** t
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;

    stack.push(arr[n-1]);
    ngeMap[arr[n-1]] = -1;

    for (let i = n-2; i >= 0; i--) {
        while (stack.length) {
            if (stack[stack.length-1] < arr[i]) {
                stack.pop();
            } else {
                ngeMap[arr[i]] = stack[stack.length-1];
                break;
            }
        }

        if (stack.length === 0) {
            ngeMap[arr[i]] = -1;
        }
        stack.push(arr[i]);
    }

    // let result = [];
    // for (let i=0; i<nums1.length; i++) {
    //     result.push(ngeMap[nums1[i]]);
    // }

    return nums1.map(x => ngeMap[x]);
};