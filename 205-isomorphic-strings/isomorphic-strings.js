/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let mapStoT = {};
    let mapTtoS = {};

    for (let i=0; i<s.length; i++) {
        // If not there in the maps, store it.
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        } 
        // If a character is already in the map, check if it's mapping to the same character or not;
        else if (mapStoT[s[i]] !== t[i] || mapTtoS[t[i]] !== s[i]) {
            return false;
        }
    }

    return true;
};