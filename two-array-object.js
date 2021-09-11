// add whatever parameters you deem necessary
function twoArrayObject(arr1, arr2) {
    let i
    const obj = {}
    for( i=0; i < arr1.length; i++) {
        let val
        if( i < arr2.length ) val = arr2[i]
        else val = null
        obj[arr1[i]] = val
    }
    return obj
}
