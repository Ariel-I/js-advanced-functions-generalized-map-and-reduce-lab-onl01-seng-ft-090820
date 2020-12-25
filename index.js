function map(array, callback) {
    let newArray = []
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, start) {
    if(!!start === false) {
        start = array.shift()
    }
    return array.reduce(callback, start)
}