/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let set = new Set(nums);

    for (let i=0; i<nums.length; i++) {
        if (set.has(original)) {
            original *= 2;
        }
    }

    return original;
};