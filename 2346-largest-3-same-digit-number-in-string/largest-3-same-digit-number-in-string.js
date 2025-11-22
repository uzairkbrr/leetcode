/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let best = "";

    for (let i = 0; i < num.length - 2; i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            const curr = num.substring(i, i+3);
            if (curr > best)  {
                best = curr;
            }
        }
    }

    return best;
};
