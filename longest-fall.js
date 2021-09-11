// add whatever parameters you deem necessary
function longestFall(arr) {
    if(!arr.length) return 0
    let count = 1
    let bestCount = count
    for(let i = 0; i < arr.length-1; i++) {
        if(arr[i]> arr[i+1]) count++
        else {
            bestCount = count > bestCount ? count : bestCount
            count = 1
        }
    }
    return count > bestCount ? count : bestCount
}
