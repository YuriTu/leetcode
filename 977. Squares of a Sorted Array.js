/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let length = A.length;

    let rs = new Array(length);
    let left = 0;
    let right = length - 1;

    for (let i = length - 1; i >= 0; i--){
        if (Math.abs(A[left]) > Math.abs(A[right])) {
            rs[i] = A[left] * A[left];
            left++;
        } else {
            rs[i] = A[right] * A[right];
            right--;
        }
    }
    return rs;

};
