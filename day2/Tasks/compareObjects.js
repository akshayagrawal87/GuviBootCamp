//object Definition
var obj1 = {
    "name": "GUVI",
    "class": "FS"
};
var obj2 = {
    "class": "FS",
    "name": "GUVI"
};

var obj3 = {
    "class": "FS!!",
    "name": "GUVI"
};

//A function to compare objects
function isEqual(obj1, obj2) {

    var objKey1 = Object.keys(obj1)
    var objKey2 = Object.keys(obj2)

    if (objKey1.length !== objKey2.length) {
        return false
    } else {

        for (var objKey of objKey1) {

            if (obj1[objKey] !== obj2[objKey])

                return false

        }



    }

    return true
}

console.log(isEqual(obj1, obj2)) //returns true

console.log(isEqual(obj2, obj3)) //returns false