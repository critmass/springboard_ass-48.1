// add whatever parameters you deem necessary
function pivotIndex(arr) {
    const sumLeft = []
    const sumRight = []

    let sum = 0
    for( let i = 0; i < arr.length-1; i++) {
        sum += arr[i]
        sumLeft[i+1]=sum
    }
    sum = 0
    for( let i = arr.length-1; i > 0; i--) {
        sum += arr[i]
        sumRight[i-1] = sum
    }
    console.log(sumLeft,sumRight)

    for( let i=1; i < arr.length-2; i++) {
        if(sumLeft[i]===sumRight[i]) return i
    }
    return -1
}
