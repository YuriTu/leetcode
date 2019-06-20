/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0) return 0;

    let left = 1;
    let right = x;
    let mid = Math.floor((left + right) / 2);
    while (right - left > 1){
        if (mid * mid > x){
            right = mid;
        }
        if (mid * mid < x){
            left = mid;
        }
        if (mid * mid === x){
            return mid;
        }
        mid = Math.floor((left + right) / 2);
    }
    return left;
};
