/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let rs = '';
    if (strs.length < 2) return strs.join('');

    for (let i = 1; i < strs.length; i++){
        let cur = strs[i];
        let j = 0;
        if (i === 1){
            rs = strs[0];
        }

        while (cur && rs[j] && rs[j] === cur[j]){
            j++;
        }

        rs = rs.slice(0,j);
    }
    return rs;
};
