/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let genkmp = (arr) => {
        let i = 1;
        let j = 0;// left point
        let map = (new Array(arr.length)).fill(0);
        for (let i = 1; i < arr.length;){
            if (arr[i] !== arr[j]){
                if (j !== 0){
                    j = map[j - 1];
                } else {
                    map[i] = 0;
                    i++;
                }
            } else {
                map[i] = j + 1; // subtext start index
                j++;
                i++;
            }
        }
        return map;
    }
    let lh = haystack.length;
    let ln = needle.length;
    if (ln === 0) return 0;
    let map = genkmp(needle);

    for (let i = 0,j = 0; i < lh;){
        if (haystack[i] === needle[j]){
            i++;
            j++;
        } else {
            if (j !== 0){
                let mapprev = j - 1;
                let mapval = map[mapprev];
                j = mapval;
            } else {
                i++;
            }
        }
        // end
        if (j === ln) return i - j;
    }
    return -1;
};
