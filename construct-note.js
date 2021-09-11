// add whatever parameters you deem necessary
function constructNote(message, letters) {

    const mFreq = {}
    const lFreq = {}

    for( let letter of message ) {
        mFreq[letter] = mFreq[letter] + 1 || 1
    }
    for( let letter of letters ) {
        lFreq[letter] = lFreq[letter] + 1 || 1
    }

    for( let letter in mFreq ) {
        if(
            lFreq[letter]===undefined ||
            mFreq[letter] > lFreq[letter]
        ) return false
    }
    return true

}
