/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    // Haven't seen any 1 yet
    let lastOneIndex = -1; 

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            // if this is not the first 1, check distance
            if (lastOneIndex !== -1) {
                let distance = i - lastOneIndex - 1;

                if (distance < k) {
                    return false;
                }
            }
            lastOneIndex = i; 
        }
    }

    return true;
};
