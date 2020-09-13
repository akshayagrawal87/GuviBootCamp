// Write a function called“ printAllKeys” 
// which returns an newArray of all the input object’ s keys.

var object = {
    name: 'RajiniKanth',
    age: 33,
    hasPets: false
};

var newArr = []

for (var a in object) {

    newArr.push(a)

}

console.log(newArr)