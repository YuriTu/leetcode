/**
 * Created by Yuri on 17/8/28.
 *
 * 有序排列一定要想到二分
 */


// 第一次做的时候只想到要减少一些计算数据没有想这是一个排序后的数组
var twoSum0 = function(numbers, target) {
    // 1.缩小遍历范围
    let min = numbers[0];
    let max = target - min;
    for (let i = 0,len = numbers.length;i< len;i++){
        // 缩小范围
        if(numbers[i] <= max){
            for (let k = 0;k < len;k++){
                if(numbers[k] <= max){
                    if ( (i !== k)  && numbers[i] + numbers[k] == target){
                        return [i+1,k+1]
                    }
                }
            }
        }
    }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    // 每次都存下s的index，返回的时候，加上就行了
    let ll = numbers
    let rs = {
        s:0,
        e:1
    }
    let index_m = Math.floor( ll.length / 2)
    const getMid = (s,e) => {
        return s + Math.floor( (e - s ) / 2)
    }
    const loop = (s,m,e) => {
        let start = ll[s]
        let mid = ll[m]
        let end = ll[e]

        if(start + mid > target){
            loop(s,getMid(s,m),m)
        } else if ( start + mid < target){
            loop(m,getMid(m,e),e)
        } else {
            return [s,midi]
        }
    }
    return loop(0,index_m,ll.length -1)

};
let a = [2,3,4]
let b = 6

console.log(
    twoSum(a,b)
)

