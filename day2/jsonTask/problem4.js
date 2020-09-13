// Write a function‘ transformFirstAndLast’ that takes in an array, 
// and returns an object with:
// 1) the first element of the array as the object’ s key, and
// 2) the last element of the array as that key’ s value.

var array = ['GUVI', 'I', 'am', 'Geek'];

var transformFirstAndLast = function (array) {

    var obj = {}

    obj[array[0]] = array[array.length - 1]

    return obj
}

console.log(transformFirstAndLast(array))