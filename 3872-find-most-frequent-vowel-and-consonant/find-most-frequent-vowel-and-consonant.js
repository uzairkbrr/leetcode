/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = {};
    for (let i=0; i<s.length; i++) {
        if (map[s[i]]){
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map);
    for(let i=0; i<mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            maxVowel = Math.max(maxVowel, map[mapKeys[i]]);
        } else {
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]]);
        }
    }

    return maxConsonant + maxVowel;
};