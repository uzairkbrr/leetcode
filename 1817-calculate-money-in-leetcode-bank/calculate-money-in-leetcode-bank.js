/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let savedMoney = 0;
    let weekStart = 1;

    for (let i = 0; i < n; i++) {
        savedMoney += weekStart + (i % 7);

        if (i % 7 === 6) {
            weekStart++;
        }
    }

    return savedMoney
};