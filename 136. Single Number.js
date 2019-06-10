/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let i = 0; i < nums.length; i++){
        if (map[nums[i]]){
            delete map[nums[i]];
        } else {
            map[nums[i]] = true;
        }
    }
    return Object.keys(map)[0];
};
