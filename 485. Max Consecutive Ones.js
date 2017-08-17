/**
 * 我把这个问题想复杂了，我打算走动态规划求最大子串长度，其实直接求就行了...
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const len = nums.length;
    let max = 0;
    const table = new Array(len);
    for (let i = 0;i < table.length; i++){
        table[i] = ( nums[i] && nums[i]);
        if (table[i]){
            if (max === 0){
                max = 1;
            }
            if (i && table[i - 1]){
                table[i] += table[i - 1];
                if (table[i] > max){
                    max = table[i];
                }
            }

        }

    }
    return max;
};