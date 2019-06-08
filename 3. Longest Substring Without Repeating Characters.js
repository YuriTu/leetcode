/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let left = 0;
    let right = 0;
    let max = 0;
    let map = new Set();

    while (right < s.length){
        let curChar = s[right];
        if (!map.has(curChar)){
            map.add(curChar);
            right++;
            max = Math.max(max , map.size);
        } else {
            let deleteChar = s[left];
            map.delete(deleteChar);
            left++;
        }
    }
    return max;
};
