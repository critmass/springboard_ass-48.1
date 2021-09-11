// add whatever parameters you deem necessary
function averagePair(arr, target) {
    const roundedTarget = target * 2
    let left = 0
    let right = arr.length - 1
    while( left < right ) {
        const ave =  arr[left] + arr[right]
        if( ave > roundedTarget ) right--
        else if( ave < roundedTarget ) left++
        else if( ave === roundedTarget ) return true
    }
    return false
}
