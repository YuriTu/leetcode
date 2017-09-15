/**
 * Created by Yuri on 17/9/15.
 * 应该用哈希表的
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let check = (val) => {
        let rg = /^[qwertyuiop]*$/gi
        let rg2 = /^[asdfghjkl]*$/gi
        let rg3 = /^[zxcvbnm]*$/gi
        return rg.test(val) || rg2.test(val) || rg3.test(val)
    }
    return words.filter(check)
};
