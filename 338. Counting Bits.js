/**
 * Created by Yuri on 17/9/4.
 * 这是个比较典型的DP题，本质上我做复杂了，在细节上可以优化
 */

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let rs = [0]
    if (num === 0 ){
        return rs;
    }
    let islog = (x,y) => {
        return (Math.log(x) / Math.log(y))
    }

    for (let i = 1;i <= num;i++){
        // let pr = rs[i - 1]
        let numlog = islog(i,2)
        // 如果是 2**n 则为1
        if(i === 1){
            rs[i] = 1
        } else if (Number.isInteger( numlog) ){
            rs[i] = 1
        } else{
            let head = Math.pow(2,Math.floor(numlog))
            rs[i] = 1 + rs[i - head]
        }
    }
    return rs;
};
/**
 * 这个方案你看主体和我其实是类似的，
 * 但是人家不用內建函数的细节很好
 * 不用计算，而是用之前的结果求得，更加有dp的思想
 */
var countBitsBest = function (num) {
    let rs = [0]
    let last;
    let next = 1;
    for (let i = 1;i < num;i++){
        if(i === last){
            rs.push(1)
            last  = next
            next = next * 2
        } else {
            rs.push( rs[i - last])
        }
    }
    return rs

}