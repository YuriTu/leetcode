// Given a non-negative integer represented as a non-empty array of digits, plus one to the integer.
//
//     You may assume the integer do not contain any leading zero, except the number 0 itself.
//
//     The digits are stored such that the most significant digit is at the head of the list.


/**
 * @param {number[]} digits
 * @return {number[]}
 * [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
 */
var plusOne = function(digits) {
    let plusFlag = false;
    const arr = digits;
    for (let len = arr.length, i = len - 1;i >= 0; i--){
        const item = arr[i];
        // first
        if (i === len - 1){
            arr[i] = item + 1;
            if ((item + 1) === 10){
                arr[i] = 0;
                plusFlag = true;
                if (len === 1){
                    arr.unshift(1);
                }
            }
        } else if (i === 0){
            if (plusFlag){
                arr[i] = item + 1;
                if (item === 9){
                    arr[i] = 0;
                    arr.unshift(1);
                }
            }
        } else {
            if (plusFlag){
                arr[i] = item + 1;
                if ((item + 1) === 10){
                    arr[i] = 0;
                    plusFlag = true;
                } else {
                    plusFlag = false;
                }
            }
        }
    }
    return arr;
};

// 这里需要注意的是，[6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// 这个测试用例是超过32位的parseInt的最大范围的，需要注意一下