/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number} 
 */
var numJewelsInStones = function(jewels, stones) {
    // Brute force approach
    // let count = 0;
    // for (let i=0; i<jewels.length; i++) {
    //     for (let j=0; j<stones.length; j++) {
    //         if (jewels[i] == stones[j]) {
    //             count++;
    //         }
    //     }
    // }

    let jewelSet = new Set();
    for (let i=0; i<jewels.length; i++) {
        jewelSet.add(jewels[i]);
    }

    let count = 0;
    for (let i=0; i < stones.length; i++) {
        if (jewelSet.has(stones[i])) {
            count++;
        }
    }

    return count;
};