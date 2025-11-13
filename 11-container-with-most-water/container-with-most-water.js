/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        // formula for finding area;
        let area = Math.min(height[left], height[right]) * (right - left);
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left++;
        }  else {
            right--;
        }
    }

    return maxWater;
};