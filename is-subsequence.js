// add whatever parameters you deem necessary
function isSubsequence(arr2, arr1) {
    let j = 0
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i]===arr2[j]) j++
        if(j >= arr2.length ) return true
    }
    return false
}
