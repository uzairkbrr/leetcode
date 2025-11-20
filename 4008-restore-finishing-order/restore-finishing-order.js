/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let result = [];

    for (let i = 0; i < order.length; i++) {
        let target = order[i];

        for (let j = 0; j < friends.length; j++) {
            if (friends[j] === target) {
                result.push(friends[j]);
            }
        }
    }

    return result;
};

