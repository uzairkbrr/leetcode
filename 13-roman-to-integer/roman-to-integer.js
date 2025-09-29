/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]];
    const next = map[s[i + 1]] || 0;
    // if current < next then it's a subtractive pair (e.g., IV, IX)
    // IV => 5 - 1 => 4
    // IX => 10 - 1 => 9
    if (current < next) sum -= current;
    else sum += current;
  }
  return sum;
};