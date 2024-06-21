function myMap(inputArray, callback) {
    let mapped = [];

    for (let i = 0; i < inputArray.length; i++){
        mapped.push(callback(inputArray[i]));
    }

    return mapped;
}

module.exports = myMap;
