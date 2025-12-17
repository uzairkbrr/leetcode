/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let sum = 0;

    while (x !== 0) {
        let digit = x % 10;
        x = Math.trunc(x / 10);
        sum = sum * 10 + digit;
    }

    if (sum < -(2 ** 31) || sum > (2 ** 31 - 1)) {
        return 0;
    }

    return sum;
};
