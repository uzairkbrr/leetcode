/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeft = [];
    // First value is my first maximum
    maxLeft[0] = height[0];

    for (let i=1; i<height.length; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], height[i]);
    }

    let maxRight = [];
    // Last value is my first maximum on the right side
    maxRight[height.length-1] = height[height.length - 1];

    for (let i=height.length - 2; i >= 0; i--) {
        maxRight[i] = Math.max(height[i], maxRight[i+1]);
    }

    let answer = 0;
    for (let i=0; i<height.length; i++) {
        answer += Math.min(maxLeft[i], maxRight[i]) - height[i];
    }

    return answer;

};