/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    // Remove consecutive duplicates
    let filtered = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            filtered.push(nums[i]);
        }
    }
    
    // Count hills and valleys
    let count = 0;
    for (let i = 1; i < filtered.length - 1; i++) {
        // Hill: left < middle > right
        if (filtered[i - 1] < filtered[i] && filtered[i] > filtered[i + 1]) {
            count++;
        }
        // Valley: left > middle < right
        else if (filtered[i - 1] > filtered[i] && filtered[i] < filtered[i + 1]) {
            count++;
        }
    }
    
    return count;
};