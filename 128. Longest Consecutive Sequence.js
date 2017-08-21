

/**
 * 这题本质上没有hard
 * 我最开始打算用数据index来做，忽略了2**32-1 这一类过大数据的内存问题，
 * 之后改用目前方式，出错的地方有：1. 重复2.负值连续
 * 第四次ci终于ac
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length <= 1){
        return nums.length;
    }
    let sortfc = (a,b) => a - b
    let newList = nums.sort(sortfc)
    let count = 1;
    let max = 1;
    for (let i = 0,len = newList.length;i < len ;i++){
        if(i){
            if(newList[i] - newList[i-1] === 1){
                count++;
                if(count > max){
                    max = count;
                }
            } else if (newList[i] - newList[i-1] > 1 ){
                count = 1;
            }
        }
    }
    return max;
};