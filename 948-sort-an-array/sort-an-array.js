/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    let middle = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0, middle));
    let right = sortArray(nums.slice(middle));

    return merge(left, right);
};

function merge(left, right) {
    let sortedArray = [];
    let i = 0;
    let j = 0;
    let k = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    return [...sortedArray, ...left.slice(i), ...right.slice(j)];
}