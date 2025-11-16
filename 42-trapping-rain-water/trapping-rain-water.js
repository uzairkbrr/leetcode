/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let n = height.length;
    
    let maxLeft = [], maxRight = [];
    maxLeft[0] = height[0];
    maxRight[n-1] = height[n-1];

    for (let i = 1; i < n; i++) {
        maxLeft[i] = Math.max(maxLeft[i-1], height[i]);
        maxRight[n-1-i] = Math.max(height[n-1-i], maxRight[n-i])
    }

    let answer = 0;
    for (let i = 0; i < n; i++) {
        let waterTrapped = Math.min(maxLeft[i], maxRight[i]) - height[i];
        answer += Math.max(waterTrapped, 0);
    }

    return answer;
};