/**
 * Created by Yuri on 17/9/26.
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {
    let list = A
    let count = 0;
    if(list.length < 3)return 0;
    let reArr = []
    for (let i = 2;i < list.length;i++){
        let prv = list[i - 1] - list[i - 2]
        let cur = list[i] - list[i -1]
        if( prv === cur){
            count ++;
        } else {
            if(!!count){
                reArr.push(count)
            }
            count = 0;
        }
        if(i === list.length -1){
            if(!!count){
                reArr.push(count)
            }
        }
    }
    const createList = () => {
        let length = 1000;
        let rs = [1]
        for(let i = 0;i < length;i++){

            rs.push(rs[i] + (i + 2))
        }
        return rs
    }
    let map = createList()
    let rsCount = 0;
    reArr.forEach(item => {
        rsCount += map[item - 1]
    })
    return rsCount;
};
