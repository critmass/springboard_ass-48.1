// add whatever parameters you deem necessary
function sameFrequency(x, y) {

    const xFreq = new Map()
    const yFreq = new Map()

    for(let i = 0; i < 10; i++) {
        xFreq[i] =  0
        yFreq[i] =  0
    }

    while(x) {
        xFreq[x%10] = xFreq[x%10] + 1
        x = Math.floor(x/10)
    }
    while(y) {
        yFreq[y%10] = yFreq[y%10] + 1
        y = Math.floor(y/10)
    }

    for( let i = 0; i < 10; i++ ) {
        if(xFreq[i] !== yFreq[i]) return false
    }
    return true
}
