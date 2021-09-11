// add whatever parameters you deem necessary
function countPairs(arr, target) {
    const map = new Map()
    let count = 0
    for( let num of arr ) {
        map[num]=num
    }
    for( let num of arr ) {
        if(
            map[target-num]!==undefined &&
            map[target-num]!==num
        ) {
            count++
        }
    }
    return Math.floor(count/2)
}

