/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
  // Convert number to string for easy manipulation
  let str = num.toString();
  
  // Replace the first '6' with '9'
  let updatedStr = str.replace('6', '9');
  
  // Convert back to number
  return parseInt(updatedStr);
};
