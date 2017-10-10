/**
 * Created by Yuri on 17/10/10.
 */

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    if(!Array.isArray(pairs) || pairs.length === 0 )return 0;
    pairs.sort( (x,y) => (x[0] - y[0]))
    let rs = new Array(pairs.length)
    rs.fill(1)
    for (let i = 0;i < pairs.length;i++){
        for (let j = 0; j < i;j++){
            // 为了防止被rs[i]覆盖
            rs[i] = Math.max(rs[i],pairs[i][0] > pairs[j][1] ? rs[j] + 1:rs[j])
        }
    }
    return rs[rs.length - 1]
};
b = [[1,500],[200,700],[600,999]]
let a = findLongestChain(b)
console.log(a)