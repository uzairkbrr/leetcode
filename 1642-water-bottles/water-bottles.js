/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let drink = 0;
    let empty = 0;

    while (numBottles > 0) {
        // 1. Drink.
        // 2. Add/Find empty bottles.
        drink += numBottles;        
        empty += numBottles;        

        // 3. Exchange empty bottles for new full ones.
        numBottles = Math.floor(empty / numExchange);
        empty = empty % numExchange;
    }

    return drink;
};
