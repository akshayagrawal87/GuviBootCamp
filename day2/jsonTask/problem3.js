//Write a function called “convertObjectToList” 
//which converts an object literal into an array of arrays.

var object = {
    name: "ISRO",
    age: 35,
    role: "Scientist"
};

function convertObjectToList(object) {

    let newArr = []

    for (let i in object) {

        var temp = []
        temp.push(i)
        temp.push(object[i])
        newArr.push(temp)

    }
    return newArr
}

console.log(convertObjectToList(object))