// Write a function“ fromListToObject” which takes in an array of arrays,
// and returns an object with each pair of elements in the array a
// s a key - value pair.

var array = [
    ['make', 'Ford'],
    ['model', 'Mustang'],
    ['year', 1964]
];

function fromListToObject(list) {

    let obj = {}

    for (let i = 0; i < list.length; i++) {

        obj[list[i][0]] = list[i][1]
    }

    return obj

}

console.log(fromListToObject(array));