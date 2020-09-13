// Write a function called“ printAllValues” 
// which returns an newArray of all the input object’ s values.

var object = {
    name: "RajiniKanth",
    age: 33,
    hasPets: false
};

function printAllValues() {

    let newArray = []

    for (var a in object) {
        newArray.push(object[a])
    }

    return newArray

}

console.log(printAllValues())