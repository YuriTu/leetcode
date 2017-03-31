// Determine whether an integer is a palindrome. Do this without extra space.

// 进行一半的数据的对比即可
// 这是我目前效率最高的一次了 前10% ..尴尬...
// 我去ES6的运行时间也太不稳定了把....

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    const str = Math.abs(x).toString();
    const len = str.length;
    if (x < 0){
        return false;
    }
    if (len === 1){
        return true;
    }
    if (len % 2 === 0){
        for (let i = 0;i <= (len / 2 - 1);i++){
            if (str[i] !== str[len - 1 - i]){
                return false;
            }
        }
    } else {
        for (let i = 0;i <= (Math.floor(len / 2) - 1);i++){
            if (str[i] !== str[len - 1 - i]){
                return false;
            }
        }
    }
    return true;
};